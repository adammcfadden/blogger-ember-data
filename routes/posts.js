Blogger.PostsRoute = Ember.Route.extend({
  // This allows us to override the code if we need to.
  // controllerName: 'posts',
  // renderTemplate: function() {
  //   this.render('posts');
  // },
  model: function() {
    return posts;
  }
});
