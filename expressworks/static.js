var express = require('express');
var app = express();
//serving static content from directory;
app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.listen(process.argv[2])
