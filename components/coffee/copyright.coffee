$ = require 'jquery'

do fill = (item = '&copy;2104 meylorodriguez.com<br />All Rights Reserved') ->
  $('.copyright').append "#{item}"
fill