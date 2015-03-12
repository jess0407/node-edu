function curryN(fn, n) {
    if (typeof n !== 'number') n = fn.length;
    var curriedFn = function (prev) {
        return function (arg) {
            var args = prev.concat(arg);
            if (args.length < n){
                return curriedFn(args);
            } else {
                return fn.apply(this, args);
            }
        };
    };
    return curriedFn([]);

};

module.exports = curryN;
