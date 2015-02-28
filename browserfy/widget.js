var domify = require('domify');

module.exports = function () {
  var dom = '<div>Hello <span class="name"></span>!</div>';
  this.setName = function (name) {
    dom = domify('<div>Hello <span class="name">'+name+'</span>!</div>');
  };
  this.appendTo = function (target) {
    target.appendChild(dom);
  };
  return this;
};
