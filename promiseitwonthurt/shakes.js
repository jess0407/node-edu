var q = require('q');
var defer = q.defer();

//your solution here
defer.promise.then(console.log, console.log);

setTimeout(function () {
  defer.resolve("I FIRED");
  defer.reject("I DID NOT FIRE!");
}, 300);
