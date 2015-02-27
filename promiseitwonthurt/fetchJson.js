var q = require('q'),
    HTTP = require("q-io/http");

var promise = HTTP.read("http://localhost:1337");
promise.then(JSON.parse)
      .then(console.log)
      .then(null, console.error)
      .done();
