var fs = require('fs');

function listDir(directory, extension, callback) {
    fs.readdir(directory, function(error, array_of_files) {
        if(error) { return callback(error); }
        return callback(null, array_of_files.filter(function(file) {
            var pattern = "." + extension;
            return file.match(pattern);
        }));
    });
}

module.exports = listDir