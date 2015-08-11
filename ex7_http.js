var http = require('http');

var url = process.argv[2];
http.get(url, function(response) {
    response.setEncoding('utf8');
    response.on('error', function(error) {
        console.log("There was some error. " + error);
    });
    response.on('data', function(data) {
        console.log(data);
    });
});


/*=========================================
=            Official Solution            =
=========================================*/
    // var http = require('http')

    // http.get(process.argv[2], function (response) {
    //   response.setEncoding('utf8')
    //   response.on('data', console.log)
    //   response.on('error', console.error)
    // })
/*-----  End of Officail Solution  ------*/


