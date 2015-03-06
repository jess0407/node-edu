module.exports = function arrayMap(arr, fn) {
     // SOLUTION GOES HERE
     return arr.reduce(function (ov, cv, index, array) {
       console.log(ov);
       return ov.concat(fn(cv,index,array));
     }, []);
}
