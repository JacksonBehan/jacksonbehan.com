var navItemHeight;
$( document ).ready(function() {
    var height = window.innerHeight;
    var navHeight = height - 50;
    navItemHeight = navHeight/4
});

window.onload = function() {
  $('.index-content').css('display', 'inline-block')
  $('.headline').textillate({ initialDelay: 200, in: { effect: 'flipInY' } });
  $('.subhead').textillate({ initialDelay: 800, in: { effect: 'flipInX' } });
  $('.nav-note').textillate({ initialDelay: 1000, in: { effect: 'rotateInDownRight' } });
  $('.tacky').textillate({ initialDelay: 2300, in: { effect: 'rollIn', sync: false, delay: 10 }, out: { effect: 'hinge', sync: true } });

  $('.tacky').on('inAnimationEnd.tlt', function () {
    setTimeout(function() {
      $('.tacky').textillate('out')
    }, 1900)
  });
}

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


var lastScrollTop = 0;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        $('.j').animate({top: '-=5', left: '-=5'}, 10);
        $('.a').animate({top: '-=7', left: '-=4'}, 10);
        $('.c').animate({top: '-=5', left: '-=5'}, 10);
        $('.k').animate({top: '-=1', left: '-=8'}, 10);
        $('.s').animate({top: '-=5', left: '-=5'}, 10);
    } else if (st < lastScrollTop) {
        $('.j').animate({top: '+=5', left: '=-10'}, 10);
        $('.a').animate({top: '+=7', left: '=-8'}, 10);
        $('.c').animate({top: '+=5', left: '=-5'}, 10);
        $('.k').animate({top: '+=4', left: '=-4'}, 10);
        $('.c').animate({top: '+=5', left: '=-5'}, 10);
    }

    if (st == 0) {
      $('.j').animate({top: '-74px', left: '23px'}, 100);
      $('.a').animate({top: '0', left: '194px'}, 100);
      $('.c').animate({top: '200px', left: '464px'}, 100);
      $('.k').animate({top: '350px', left: '769px'}, 100);
      $('.s').animate({top: '515px', left: '1043px'}, 100);
    }
    lastScrollTop = st;
});