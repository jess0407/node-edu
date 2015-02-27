var q = require('q'),
    def1 = q.defer(),
    def2 = q.defer();


function all(promise1, promise2) {
  var def = q.defer(),
      counter = 0,
      val1,val2;
      function handle2() {
        if(counter === 2){
          def.resolve([val1, val2]);
        }
      }

      promise1.then(function (data) {
        counter++;
        val1 = data;
        handle2();
      }).then(null,def.reject);
      
      promise2.then(function (data) {
        counter++;
        val2 = data;
        handle2();
      }).then(null, def.reject);

    return def.promise;
}

all(def1.promise, def2.promise).then(console.log);

setTimeout(function () {
  def1.resolve("PROMISES");
  def2.resolve("FTW");
}, 200);
