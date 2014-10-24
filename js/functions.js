$(document).ready(function() {
  //check if used option is checked
  function checkUsed(){
    if ($('#switcher2').is(':checked')) {
      $('.jsUsedHidden').hide();
    }
    else{
      $('.jsUsedHidden').show();

    }
  }

  //run function to check if used fuction is checked
  checkUsed()

  //run the function above, on click
  $('.filters-switchers__item').click(function() {
    checkUsed();
  });


  //toggle active state to be sure that styles for active states are working
  $('.jsAdvancedCall, .form-submit').click(function(event) {
    event.preventDefault();
    $(this).toggleClass('is-active');
  });


  //hide other blocks in row in hover state
  $('.filters-options__switcher').hover(function() {
    $('.filters-base .filter-box').not('.filter-box_actions').hide();
  }, function() { 
    $('.filters-base .filter-box').not('.filter-box_actions').show();

    //in this part we must be sure that the block  which was hidden because of used option, will not be visible after mouse out
    if ($('#switcher2').is(':checked')) {
     $('.jsUsedHidden').hide();
   }
 });


  // ready
});