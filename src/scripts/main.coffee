window.jQuery = window.$ = require('jquery')
window.jade = require('./lib/pug-runtime')

attachFastClick = require('fastclick')
require('./lib/component')

data = require('./data/posts')
popup = require('./components/popup')

attachFastClick(document.body)
$(document).ready ->

  Component.vitalize()