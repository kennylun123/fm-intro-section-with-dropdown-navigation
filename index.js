$('.btn-menu').click(()=>{
    $('.btn-menu').toggleClass('btn-menu-active');
    $('.nav-menu').toggleClass('nav-menu-active');
    $('.icon-menu').toggle();
    $('.icon-menu-close').toggle();
    $('.background').toggleClass('background-active');
});

$('.features').click(()=>{
  $('.features .dropdown').toggle();
  $('.features .icon-arrow-down').toggle();
  $('.features .icon-arrow-up').toggle();
});

$('.company').click(()=>{
  $('.company .dropdown').toggle();
  $('.company .icon-arrow-down').toggle();
  $('.company .icon-arrow-up').toggle();
});


$(document).click((event)=>{
   // Check if the target of the click event is outside of the dropdown menu
  if (!$(event.target).closest('.features').length && !$(event.target).closest('.company').length) {
    $('.dropdown').css('display', 'none');
    $('.icon-arrow-up').css('display', 'none');
    $('.icon-arrow-down').css('display', 'block');
  }

// Check if the target of the click event is outside of the nav menu
  if ($(event.target).closest('.background').length) {
    $('.nav-menu').removeClass('nav-menu-active');
    $('.background').removeClass('background-active');
    $('.icon-menu').toggle();
    $('.icon-menu-close').toggle();

  }

});
