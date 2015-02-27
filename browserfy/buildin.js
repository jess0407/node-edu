var url = require('url'),
    querystring = require('querystring');

var address = prompt();
var parsed = url.parse(address);
var params = querystring.parse(parsed.query);
console.log(url.resolve(address,params.file));
