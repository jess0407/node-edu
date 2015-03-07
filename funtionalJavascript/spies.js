function Spy(target, method) {
  // SOLUTION GOES HERE
  var func = target[method],
      obj = {count : 0};
      target[method] = function () {
        obj.count++;
        return func.apply(this, arguments);
      };
  return obj;
}

module.exports = Spy;
