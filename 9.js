  var http = require('http'),
      bl = require('bl'),
      request1 = process.argv[2],
      request2 = process.argv[3],
      request3 = process.argv[4],
      content1, content2, content3;


      http.get(request1, function(res){
        res.pipe(bl(function(err,data){
          content1 = data.toString();
          if(content1 && content2 && content3){
            console.log(content1);
            console.log(content2);
            console.log(content3);
          }
        }));
      });

      http.get(request2, function(res){
        res.pipe(bl(function(err,data){
          content2 = data.toString();
          if(content1 && content2 && content3){
            console.log(content1);
            console.log(content2);
            console.log(content3);
          }
        }));
      });

      http.get(request3, function(res){
        res.pipe(bl(function(err,data){
          content3 = data.toString();
          if(content1 && content2 && content3){
            console.log(content1);
            console.log(content2);
            console.log(content3);
          }
        }));
      });
