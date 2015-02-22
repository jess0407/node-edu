  var http = require('http'),
      bl = require('bl'),
      request = process.argv[2];

      http.get(request, function(res){
        res.pipe(bl(function(err,data){
          var content = data.toString();
          console.log(content.length);
          console.log(content);
        }));
      });
