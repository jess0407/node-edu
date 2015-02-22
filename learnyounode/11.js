var http = require('http'),
    fs = require('fs');

var rs = fs.createReadStream(process.argv[3]);

var server = http.createServer(function (req,res) {
    res.writeHead(200, { 'content-type': 'text/plain' });
    rs.pipe(res);
});

server.listen(Number(process.argv[2]))
