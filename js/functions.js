$(document).ready(function() {
  //check if used option is checked
  function checkUsed(){
    if ($('#switcher2').is(':checked')) {
      $('.jsUsedHidden').hide();
      $('.filter-box_used').show()
    }
    else{
      $('.jsUsedHidden').show();
       $('.filter-box_used').hide()

    }
  }

  //run function to check if used fuction is checked
  checkUsed()

  //run the function above, on click
  $('.filters-switchers__item, .filter-reset').click(function() {
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
   else{
     $('.filter-box_used').hide()
   }
 });


$('.jsAdvancedCall').click(function(event) {
  event.preventDefault();
  $('.filters-block_advanced').toggle();
  $('.filters-switchers__item').toggleClass('is-advanced');
});




  // ready
});

//custom select
function customSelect (theselect, thevalue) {

  var SELECT = $('#'+ theselect).hide();
  var SELECTVALUE = $('#' + thevalue);
  SELECTVALUE.append('<div class="myfiltrvalue"><div class="filter_inner"/></div></div>')
  
  SELECT.find('option').each(function(index) {
    var optionValue = $(this).val();
    var optionTitle = $(this).html();
    SELECTVALUE.find('.filter_inner').append('<span class="myfiltrvalue__item" value="'+ optionValue +'"> '+ optionTitle +' </span>')
  });
  
  var curentTitlte = SELECT.find(':selected').html();
  SELECTVALUE.prepend('<span class="myselect__current">'+ curentTitlte +'</span>');
  SELECTVALUE.children('span').click(function(event) {
    $(this).next('div').fadeToggle('fast');
    SELECTVALUE.toggleClass('active');
  });
  SELECTVALUE.find('div span').click(function() {

    SELECTVALUE.find('.myselect__current').html($(this).html());
    SELECTVALUE.find('.myfiltrvalue').fadeToggle();
    var needOption = ($(this).attr('value'))
    SELECTVALUE.toggleClass('active');
    SELECT.find(' option[value="'+ needOption +'"]').attr('selected', 'selected').siblings().attr('selected', false).parent('select').change();
  });
}
  