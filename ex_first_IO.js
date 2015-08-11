var file = process.argv[2];
var fs = require('fs');
var buffer = fs.readFileSync(file);
var string = buffer.toString();
var total = string.split(/\n/).length;
console.log(total -1);
