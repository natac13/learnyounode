var url = require('url'),
  http = require('http'),
  port = +(process.argv[2]);

function fillZeros(num) {
  return +((num < 10 ? "0" : "") + num);
}

var server = http.createServer(function(req, res) {

  res.writeHead(200, { 'content-type': 'application/json' });

  var fullUrl = url.parse(req.url, true);
  // console.log(fullUrl.query.iso);
  // console.log(fullUrl.pathname);

  var dateObj = new Date(fullUrl.query.iso);

  if(fullUrl.pathname === '/api/parsetime') {
    var ans = {
      hour: fillZeros(dateObj.getHours()),
      minute: fillZeros(dateObj.getMinutes()),
      second: fillZeros(dateObj.getSeconds())
    }
    res.end(JSON.stringify(ans));
  }
  if(fullUrl.pathname === '/api/unixtime') {
    res.end(JSON.stringify({
      unixtime: dateObj.getTime()
    }));
  }


});
server.listen(port);

/*
var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  if (/^\/api\/parsetime/.test(req.url))
    result = parsetime(time)
  else if (/^\/api\/unixtime/.test(req.url))
    result = unixtime(time)

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))

 */