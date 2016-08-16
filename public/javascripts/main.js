var navItemHeight;
$( document ).ready(function() {
    var height = window.innerHeight;
    var navHeight = height - 50;
    navItemHeight = navHeight/4
    // console.log(navItemHeight)
});

$('.headline').textillate({ initialDelay: 200, in: { effect: 'flipInY' } });
$('.subhead').textillate({ initialDelay: 800, in: { effect: 'flipInX' } });

$('#nav-button').click(function() {
  $('.headline').addClass('hidden');
  $('.subhead').addClass('hidden');
  $('#nav-button').addClass('hidden');
  $('.fa-times').removeClass('hidden');
  $('.navbar-nav li').css('height', navItemHeight)
});

$('.fa-times').click(function() {
  $('.navbar-collapse').removeClass('in');
  $('.headline').removeClass('hidden');
  $('.subhead').removeClass('hidden');
  $('.fa-times').addClass('hidden');
  $('#nav-button').removeClass('hidden');
  $('.navbar-nav li').css('height', 50)
});