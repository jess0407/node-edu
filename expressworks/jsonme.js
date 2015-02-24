var express = require('express'),
    fs = require('fs');
var app = express();

app.get('/books', function(req, res) {
  fs.readFile(process.argv[3], function(err, file){
    res.json(JSON.parse(file));
  });
});
app.listen(process.argv[2]);
