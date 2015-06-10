Blogger.Router.map(function() {
  this.resource('posts', {path: '/'});
  this.resource('new-post');
  this.resource('about');
  this.resource('contact', function() {
    this.resource('phone');
    this.resource('email');
  });
  this.resource('recent-comments');
  this.resource('post', {path: 'posts/:post_id'}, function() {
    this.resource('new-comment');
  });

});
