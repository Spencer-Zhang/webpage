var PARALLAX_DEPTH = 0.3;

$(function() {
  $(window).scroll(function() {
    var y = $(document).scrollTop();
    $('.parallax').css('top', -PARALLAX_DEPTH * y);
  })
})