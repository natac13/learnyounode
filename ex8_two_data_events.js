var fs = require('fs');
var bl = require('bl');
var hyp = require('hyperquest');
// var http = require('http');

var url = process.argv[2];
// http.get(url, function(response) {
//     response.pipe(bl(function(err, data) {
//         if(err) { console.log(error); }
//         data = data.toString();
//         console.log(data.length);
//         console.log(data);
//     }))
// })




hyp(url).pipe(bl(function(err, data) {
    if(!err) {
        console.log(data.length);
        console.log(data.toString());
    }
}));

/**
 * Both of these will work! What is happening is the response that comes back
 * will be .pipe to bl which will put them all together.
 */
