$(document).ready(function() {
  $('.jsAdvancedCall, .form-submit').click(function(event) {
    event.preventDefault();
    $(this).toggleClass('is-active');
  });
  // ready
});