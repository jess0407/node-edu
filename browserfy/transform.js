var fs = require('fs');
var file = fs.readFileSync('/usr/local/lib/node_modules/browserify-adventure/problems/using_transforms/wake.txt', 'utf8');
var lines = file.split('\n');
lines.forEach(function (line, index) {
    if (index % 5 === 0) {
        console.log(pad(line,index));
    }
    else {
        console.log('    ' + line);
    }
});

function pad (text, number) {
  if(number < 10){
    return '  '+number+' '+text;
  } else {
    return ' '+number+' '+text;
  }
}
