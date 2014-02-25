AppView = Backbone.View.extend({
  el: $('#post-app'),
  events: {
    'click #post-content-input': 'createPost'
  },
  initialize: function() {
    this.input = this.$('#')
  },
  createPost: function() {
    Posts.create({})
  }
})