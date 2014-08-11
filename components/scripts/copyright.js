var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.copyright').append("" + item);
})('&copy;2104 meylorodriguez.com<br />All Rights Reserved');

fill;
