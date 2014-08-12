$ = require 'jquery'

do fill = (item = '&copy;2104 meylossssrodriguez.com<br />All Rights Reserved') ->
  $('.copyright').append "#{item}"
fill