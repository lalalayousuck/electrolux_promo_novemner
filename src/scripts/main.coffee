window.jQuery = window.$ = require('jquery')
window.jade = require('./lib/pug-runtime')

attachFastClick = require('fastclick')
require('./lib/component')
require('./components/move')
require('./components/header')

require('./components/throttle')()

data = require('./data/posts')
popup = require('./components/popup')

ga = require('./ga')

attachFastClick(document.body)
$(document).ready ->

  Component.vitalize()