var http = require('http'),
    bl   = require('bl')
    hyper  = require('hyperquest');


var httpGet = function() {
    var count = 0;
    var results = [];

    return function(url, index) {
            hyper(url).pipe(bl(function(error, data) {
                if(!error) {
                    count += 1;
                    results[index] = data.toString();
                }
                if(count === 3) {
                    results.forEach(function(result) {
                        console.log(result);
                    });
                }
            }));
        }
}();


var urls = process.argv.slice(2);
urls.forEach(function(url, index) {
  httpGet(url, index);
});







// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//     for (var i = 0; i < 3; i++)
//         console.log(results[i])
// }

// function httpGet (index) {
//     http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//             if (err)
//                 return console.error(data)

//             results[index] = data.toString()
//             count++

//             if (count == 3) // yay! we are the last one!
//                 printResults()
//         }))
//     })
// }

// for (var i = 0; i < 3; i++)
//     httpGet(i)