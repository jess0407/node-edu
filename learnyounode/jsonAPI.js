var map = require('through2-map'),
    http = require('http'),
    url = require('url');

var parts, path, query, iso, obj;
var server = http.createServer(function (req,res) {
      parts = url.parse(req.url);
      console.log(parts);
      pathname = parts.pathname;

      query = parts.query;
      iso =new Date(query.split('=')[1]);

      obj = {
        hour:iso.getHours(),
        minute: iso.getMinutes(),
        second: iso.getSeconds()
      };
      console.log(obj);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      if(pathname==='/api/parsetime'){
        return res.end(JSON.stringify(obj));
      }
      if(pathname==='/api/unixtime'){
        return res.end(JSON.stringify({unixtime:iso.getTime()}));
      }

});

server.listen(Number(process.argv[2]))
