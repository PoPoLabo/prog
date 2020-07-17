$(function() {

  $('.menu-icon').click(function() {
    $('#menu-modal').fadeIn();
    $('.menu-icon').fadeOut();
    $('.close-icon').fadeIn();
  });
  $('.close-icon').click(function() {
    $('#menu-modal').fadeOut();
    $('.menu-icon').fadeIn();
    $('.close-icon').fadeOut();
  });
  $('.navi').click(function() {
    $('#menu-modal').fadeOut();
    $('.menu-icon').fadeIn();
    $('.close-icon').fadeOut();
  });




  $('.lesson-hover').hover(
    function() {
      $(this).find('.text-contents').addClass('text-active');
    },
    function() {
      $(this).find('.text-contents').removeClass('text-active');
    }
  );

  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').text('+');
    } else {
      $answer.addClass('open');
       $answer.slideDown();
      $(this).find('span').text('-');
    }
  });

  $(function() {
    var topBtn = $('.to-top');
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
  });

$(function(){
   $('a[href^=#]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});


});
