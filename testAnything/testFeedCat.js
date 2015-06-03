var test = require('tape'),
    feedCat = require(process.argv[2]);

test('feedCat', function (t) {
    t.plan(2);
    t.equal(feedCat('rice'), 'yum', 'Cat likes the rice');
    t.throws(feedCat.bind(null, 'chocolate'));
});
