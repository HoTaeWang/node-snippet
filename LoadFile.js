// loading a file into memory
var fs = require('fs');

fs.readFile('./LoadFile.js', function(err, fileContent){
	if(err){
		throw err;
	}
	console.log('file content ', fileContent.toString());
});

