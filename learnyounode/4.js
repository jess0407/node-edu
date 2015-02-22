var fs = require('fs');
fs.readFile(process.argv[2], 'UTF-8', function(e,f){
	if (e) throw e;
	console.log(f.split('\n').length-1);
});
