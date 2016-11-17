(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga')

ga('create', 'UA-87486636-1', 'auto');
ga('send', 'pageview');

setTimeout(function() {
  ga('send', 'event', 'timer', 'read');
}, 30000);

$(document).on('click', '.js-popupLabel', function() {
  ga('send', 'event', 'cleaning-electrolux', 'labelOpen', 'labelOpen');
});

$(document).on('click', '.post-preview', function() {
  ga('send', 'event', 'cleaning-electrolux', 'openArticle', 'openArticle');
});

$(document).on('click', '.js-popupMoar', function() {
  ga('send', 'event', 'cleaning-electrolux', 'showMoreArticles', 'showMoreArticles');
});