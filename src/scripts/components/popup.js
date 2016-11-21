var $ = require('jquery');
var data = require('../data/posts');

Component.define('popup', {

  events: {
    'click on %label': 'openPopup',
    'click on %exit': 'closePopup',
    'click on %moar': 'showMoarPosts'
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
    console.log(this.dataPosts)
    this.renderPosts();


    $('.popup').addClass('is-visible');
  },

  prepareData: function(id) {
    this.dataPosts = data.posts.filter(function(post) {
      return post.id != id; 
    });
  },

  setMainAdvise: function() {
    $('.label-preview.label__xl').html('<div class="label-preview_circle"></div><a class="post-preview" href="' + this.data[this.index].url + '"><img class="post-preview_pic" src="' + this.data[this.index].image + '"><div class="post-preview_tag">' + this.data[this.index].category + '</div><div class="post-preview_title">' + this.data[this.index].title + '</div></a>');    
    $('.popup_desc').html('' + this.data[this.index].advise + '');
  },

  renderPosts: function() {
    this.dataPostsRender = this.dataPosts.slice(0, 6);
    $('.label-previews').html(Templates.advices({posts: this.dataPostsRender}));
    $('.label-previews').after('<div class="btn js-popupMoar">Смотреть все</div>');
  },

  showMoarPosts: function(e, el) {
    $(el).fadeOut();
    this.dataPostsRender = this.dataPosts.slice(6);
    $('.label-previews').append(Templates.advices({posts: this.dataPostsRender}));
  },

  closePopup: function() {
    $('.popup').removeClass('is-visible'); 
    $('.is-active').removeClass('is-active');
    $('.label-previews').html('');
    $('.btn').remove();
  }
});