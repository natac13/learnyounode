var http = require('http'),
  port = process.argv[2],
  location = process.argv[3],
  fs = require('fs'),
  options = {
    encoding: 'utf8'
  };

var server = http.createServer(function(request, response) {
// I do not understand the response.writeHead part in the official solution
    var stream = fs.createReadStream(location, options);
    stream.pipe(response)
});
server.listen(port);


/*
  var http = require('http')
  var fs = require('fs')

  var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })

    fs.createReadStream(process.argv[3]).pipe(res)
  })

  server.listen(Number(process.argv[2]))

 */