var fs = require('fs');

module.exports = function(dir, type, callback) {
  var rgx = new RegExp('.'+type, 'ig'),
      matches = [];
  fs.readdir(dir, function(e,f){
    if(e) return callback(e);
    f.map(function(fn){
      if (fn.match(rgx)) matches.push(fn);
    });
    return callback(null, matches);
  });
};
