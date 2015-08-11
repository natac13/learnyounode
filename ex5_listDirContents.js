var fs = require('fs');

var dir_path = process.argv[2],
  ext_to_fitler = "." + process.argv[3];

function listDir() {
    fs.readdir(dir_path, function(error, list){
        list.filter(function(file) {
            return file.match(ext_to_fitler)
        }).forEach(function(file) {
            console.log(file);
        });
    });
}


listDir();

