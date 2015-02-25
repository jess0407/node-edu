
    function countWords(inputWords) {
      // SOLUTION GOES HERE
      var obj = {};
      inputWords.reduce(function(memo, cursor){
        if(memo){obj[memo]=1};
        if(!obj[cursor]){obj[cursor] =0};
        obj[cursor]++;
      });

      return obj;
    }

    module.exports = countWords
