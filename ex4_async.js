/* Natac */


var fs = require('fs');
var file = process.argv[2];
var total;
/**
 * Docs for fs
 * file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html
 *
 * This is using async which is the way node is designed.
 * the readFile() takes the file to read as the first argument, the encoding
 * which can be optional(returns buffer instead of string), and then a callback()
 * function.
 * https://github.com/maxogden/art-of-node#callbacks
 *
 * That function will take two params; first: errors, second: the buffer/string
 * data.
 *
 */


function reader(callback) {
    fs.readFile(file, 'utf8', function readFile(err, data){
        if(err) { console.log("There was an error." + " " + err); }
        total = data.split('\n').length - 1;
        callback()
    })
}


function print_num() {
    console.log(total);
}

reader(print_num);

/**
 * The official solution
 * var fs = require('fs')
 * var file = process.argv[2]
 *
 *   fs.readFile(file, function (err, contents) {
 *      var lines = contents.toString().split('\n').length - 1
 *      console.log(lines)
 *   })
 *
 */