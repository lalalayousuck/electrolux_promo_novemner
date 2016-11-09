window.jQuery = window.$ = require('jquery')
window.jade = require('./lib/pug-runtime')

attachFastClick = require('fastclick')

data = require('./data/posts')

ga = require('./ga')
require('./lib/component')

attachFastClick(document.body)
$(document).ready ->
	$('.label').click ->
		$(@).toggleClass('is-active')

	$('.label5').click ->
		$('.popup').removeClass('is-closed')

	$('.popup_exit').click ->
		$('.popup').addClass('is-closed')