var http = require('http'),
  map = require('through2-map'),
  fs = require('fs'),
  port = +(process.argv[2]);

var server = http.createServer(function(req, res) {

  // the request object has a attr for the method
  // every time it is post then take the request pipe it to the map function
  // to return that to the response object.
  var x = map(function(chunk) {
      return chunk.toString().toUpperCase();
    });

  if(req.method == 'POST') {
    req.pipe(x).pipe(res);
  } else {
    return res.end('was not a post request');
  }
});
server.listen(port);
