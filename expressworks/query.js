var express = require('express'),
    bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.urlencoded({extended: false}));
app.get('/search', function(req, res) {
  res.send(req.query);
});
app.listen(process.argv[2]);
