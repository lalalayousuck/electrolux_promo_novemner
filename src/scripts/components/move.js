var $ = require('jquery');

$(document).ready(function() {

  $('body').mousemove($.throttle(80, function(e) {
    $('.labels').css({'transform': 'translate(' + e.pageX/100 + 'px, ' + e.pageY/100 + 'px)'});
  }));
});