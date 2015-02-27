var ndjson = require('./ndjson.js');
var str = prompt();
var arr = prompt();
console.log(ndjson.parse(str));
console.log(ndjson.stringify(arr));
