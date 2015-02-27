var q = require('q');

function throwMyGod () {
  throw Error("OH NOES");
}

function iterate (num) {
  console.log(num);
  return num+1;
}

q.fcall(iterate,1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(throwMyGod)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(console.log, console.log);
