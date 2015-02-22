var fs = require('fs'),
    dir = process.argv[2],
    type = process.argv[3],
    rgx = new RegExp('.'+type, 'ig');
fs.readdir(dir, function(e,f){
	if(e) throw e;
	f.map(function(fn){
		if (fn.match(rgx)) console.log(fn);
	});
});
