var filter = require('./filter');
filter(process.argv[2],process.argv[3], function(e, fn){
  if(e) throw e;
  fn.forEach(function(f){
    console.log(f);
  });
});
