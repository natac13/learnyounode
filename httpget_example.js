var http = require('http');

http.get("http://www.google.com/index.html", function(res) {
  console.log("Got response: " + res.statusCode);
  res.setEncoding('utf8');
  res.on('data', function(stuff) {
    console.log(stuff);
  })
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});