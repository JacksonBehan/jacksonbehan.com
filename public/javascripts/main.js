var navItemHeight;
$( document ).ready(function() {
    var height = window.innerHeight;
    var navHeight = height - 50;
    navItemHeight = navHeight/4
    // console.log(navItemHeight)
});

$(function () {
    $('.headline').textillate();
})

$('#nav-button').click(function() {
  $('.headline').addClass('hidden');
  $('#nav-button').addClass('hidden');
  $('.fa-times').removeClass('hidden');
  $('.navbar-nav li').css('height', navItemHeight)
});

$('.fa-times').click(function() {
  $('.navbar-collapse').removeClass('in');
  $('.headline').removeClass('hidden');
  $('.fa-times').addClass('hidden');
  $('#nav-button').removeClass('hidden');
  $('.navbar-nav li').css('height', 50)
});