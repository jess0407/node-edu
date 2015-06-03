var test = require('tape');
var fancify = require(process.argv[2]);

test('fancify should make strings fancy', function (t) {
  t.plan(3);
  t.equal(fancify('Hello'), '~*~Hello~*~', 'fancify(str) returns the str wrapped in ~*~');
  t.equal(fancify('Hello', true), '~*~HELLO~*~', 'It takes an optional second argument that converts the string into ALLCAPS');
  t.equal(fancify('Hello', false, '!'), '~!~Hello~!~', 'It takes a third optional argument that determines the character in the middle');
  t.end();
});
