$(document).ready(function (){
  // Header
  $('#nav li').hover(function(){
    $(this).children('ul').stop(false, true).slideDown(300);
    $(this).children('a').addClass('selected');
  },function(){
    $(this).children('ul').stop(true, false).slideUp(0);
    $(this).children('a').removeClass('selected');
  });

  //burger
  $('.burger').on('click', function(){
    $(this).closest('#navigation').toggleClass('menu-open');
  });

  //Main
  $('div.box').delay(500).animate({width:'toggle'}, 900);

  $('.back-img, div.box').click(function(){
    $('div.box').stop(false, false).animate({width: 'toggle'}, 400);
  });

  //Bottom bar
  $('#open-key, div#pop-up-box article, div.circle').click(function(){
    $('div.vector').toggleClass('rotate')
    $('div.circle').slideToggle(300)
    $('div#pop-up-box article').stop(false, false).slideToggle(500);
  });
});
