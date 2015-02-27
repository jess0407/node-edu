var HTTP = require("q-io/http"),
      _ = require('lodash');

var objurl = _.bind(String.prototype.concat, "http://localhost:7001/");
HTTP.read("http://localhost:7000/")
    .then(_.compose(HTTP.read, objurl))
    .then(_.compose(console.log,JSON.parse))
    .then(null, console.error)
    .done();
