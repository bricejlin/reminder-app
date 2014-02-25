PostView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  render: function() {
    var template = _.template( $('#post-template').html() );

    this.$el.html(template);
  },
  events: {
    'click #add-post-btn': 'addPost'
  },
  addPost: function(event) {
    var postTitle = '<h1>' + $('#post-title-input').val() + '</h1>';
    var postContent = '<p>' + $('#post-content-input').val() + '</p>';

    $('#posts').append(
      '<div class="post">' + postTitle + postContent + '</div>');
  }
})