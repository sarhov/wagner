$(document).ready(function() {
  //check if used option is checked
  function checkUsed(){
    if ($('#switcher2').is(':checked')) {
      if ($(window).width() > 825) {
       $('.jsUsedHidden').hide();
     }
     
     $('.filter-box_used').show()
     if ($(window).width() <= 825) {
      $('.jsUsedMiddle').hide();  
    }
  }
  else{
    if ($(window).width() > 825) {
     $('.jsUsedHidden').show();
   }
   $('.filter-box_used').hide()
   $('.jsUsedMiddle').show();  

 }
 if ($(window).width() <= 825) {
  var block =  $('.jsUsedHidden').detach();
  $('.filters-block_advanced > div:last-child').after(block)
}
}

  //run function to check if used fuction is checked
  checkUsed();
  $(window).on('resize', function(){
   checkUsed();
      // var win = $(this); //this = window
      // if (win.width() <= 825) { /* ... */ }
      // if (win.width() >= 1280) { /* ... */ }
    });

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
  $('.jsBaseSwitcher').hover(function() {
    var parent = $(this).parents('.filters-block');
    console.log(parent)
    parent.find('.filter-box').not('.filter-box_actions').hide();
  }, function() { 
    var parent = $(this).parents('.filters-block');
    parent.find('.filter-box').not('.filter-box_actions').show();

    //in this part we must be sure that the block  which was hidden because of used option, will not be visible after mouse out
    if ($('#switcher2').is(':checked')) { 
      if ($(window).width() <= 825) {
        $('.jsUsedMiddle').hide();  
      }
 if ($(window).width() > 825) {
     $('.jsUsedHidden').hide();
   }
    
    }
    else{
     $('.filter-box_used').hide()
   }
 });


  $('.jsAdvancedCall').click(function(event) {
    event.preventDefault();
    $('.filters-block_advanced').toggle();
  // $('.filters-switchers__item').toggleClass('is-advanced');
});


  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };
  if(isMobile.any()) {
    $('body').addClass('mobile');
  }
  else{
    $('body').addClass('desktop')
  }
// $('.mobile .header-menu a').on('click', function (e) {
// e.preventDefault();
// if ($(this).parents('li:first').hasClass('hassub')) {
// var $this = $(this).parents('li:first');
// if ($this.hasClass('touch-active')) {
// location.href = $(this).attr('href');
// } else {
// $('.touch .header-menu li').removeClass('touch-active');
// $this.addClass('touch-active');
// }
// } else {
// location.href = $(this).attr('href');
// }


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
