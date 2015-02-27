function reduce(arr, fn, initial) {
  // SOLUTION GOES HERE
  var next = function (index, value) {
    // end condition
    if (index > arr.length - 1) return value ;
    // go to next element
    return next(index + 1, fn(value, arr[index], index, arr));
  };

  return next(0, initial);

}

module.exports = reduce
