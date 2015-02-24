var express = require('express');
var app = express();
//serving static content from directory;

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));

app.listen(process.argv[2])
