var q = require('q');

function parsePromised(json){
  var defer = q.defer(),
      res;

  try{
     res = JSON.parse(json);
  }catch(e){
    defer.reject(e);
  }
  defer.resolve(res);
  return defer.promise;
};

parsePromised(process.argv[2])
.then(console.log, console.log);
