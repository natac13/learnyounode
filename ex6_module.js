var myModule = require('./myModule');

var directory = process.argv[2];
var extension = process.argv[3];



function print_dir_contents_filtered(error, data) {
    if(error) { console.log(error); }
    data.forEach(function(file) {
        console.log(file);
    });
}

myModule(directory, extension, print_dir_contents_filtered);

