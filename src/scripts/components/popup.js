var $ = require('jquery');
var data = require('../data/posts');

Component.define('popup', {

  events: {
    'click on %label': 'openPopup',
    'click on %exit': 'closePopup'
  },

  init: function() { 
    this.data = data.posts;
    this.index = 0;
    this.dataPosts = {};
  },

  openPopup: function(e, el) {
    this.index = $(el).attr('data-id');
    $(el).addClass('is-active');

    var id = this.index;

    this.setMainAdvise();
    this.prepareData(id);
    this.renderPosts();

    $('.popup').addClass('is-visible');
  },

  prepareData: function(id) {
    this.dataPosts = data.posts.filter(function(post) {
      console.log(post);
      return post.id != id; 
    });
  },

  setMainAdvise: function() {
    $('.label-preview.label__xl').html('<div class="label-preview_circle"></div><a class="post-preview" href="' + this.data[this.index].url + '"><img class="post-preview_pic" src="' + this.data[this.index].image + '"><div class="post-preview_tag">' + this.data[this.index].category + '</div><div class="post-preview_title">' + this.data[this.index].title + '</div></a>');    
  },

  renderPosts: function() {
    $('.label-previews').html(Templates.advices({posts: this.dataPosts}));
  },

  closePopup: function() {
    $('.popup').removeClass('is-visible'); 
    $('.is-active').removeClass('is-active');
  }
});