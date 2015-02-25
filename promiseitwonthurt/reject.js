var q = require('q');
var defer = q.defer();

//your solution here
defer.promise.then(function(val){
  console.log(val);
},function (e) {
  console.log(e);
});

setTimeout(function () {
  defer.reject("REJECTED!");
}, 300);
