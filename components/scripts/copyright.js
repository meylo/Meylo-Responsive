var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.copyright').append("" + item);
})('&copy;2104 meylossssrodriguez.com<br />All Rights Reserved');

fill;
