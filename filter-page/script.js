$(function(){
  $('#ItemList').mixItUp();
});

$('.dropdown .toggle').click(function() {
  if ($(this).parent().hasClass('active')) {
    $('.dropdown').removeClass('active');
  } else {
    $('.dropdown .button i').removeClass('fa-times').addClass('fa-sort-asc');
    $('.dropdown').removeClass('active');
    $(this).parent().toggleClass('active');
  }

  $(this).find('i').toggleClass('fa-sort-asc').toggleClass('fa-times');
});