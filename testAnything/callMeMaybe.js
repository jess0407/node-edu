var test = require('tape'),
    repeatCallback = require(process.argv[2]);

test('The function repeat calling the callback for certain times', function (t) {
  t.plan(4)
  repeatCallback(4, function () {
    t.pass('callback called')
  })
})
