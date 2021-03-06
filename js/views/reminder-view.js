ReminderView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  render: function() {
    // Compile the template using underscore
    var template = _.template( $('#reminder-template').html() );
    // Load the compiled HTML into the Backbone 'el'
    this.$el.html(template);
  },
  events: {
    'click #remind-btn': 'setReminder'
  },
  setReminder: function(event) {
    // Button clicked, you can access the element that was clicked
    // event.currentTarget
    var interval = 60000 * ( Number( $('#reminder-input').val() ) || 20 );

    // Set alert interval
    setInterval(function() {

      alert(interval/60000 + ' minutes up! Time for 20 second break!!');

      $('.container').toggleClass('blackout');
      $('.jumbotron').toggleClass('blackout');

      setTimeout(function() {
        $('.container').toggleClass('blackout');
        $('.jumbotron').toggleClass('blackout');
      }, 20000);

    }, interval);

    // Replace template with confirmation for interval in minutes
    this.$el.replaceWith('<p>Great! Will remind you every ' + interval/60000 + ' minute' + (interval/60000 === 1 ? '' : 's') + '!</p>');
  }
});
