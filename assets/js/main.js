var offset = 300,
    offset_opacity = 1200,
    scroll_top_duration = 700,
    toTop = $('.topBtn');

$('body').scrollspy({
  target: '#singlePageNav'
});

$(document).ready(function() {
  setInterval(function() {
    $('.alert').fadeIn(100).fadeOut(200).fadeIn(100).fadeOut(200).fadeIn(100);
  },3000)
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('[data-spy="scroll"]').each(function() {
  var $spy = $(this).scrollspy('refresh')
});

// $(".alert").hide();
// $(".alert").fadeTo(2000, 500).fadeOut(500, function(){
//  $(".alert").fadeOut(500);
// });

$('form').change(function() {
  var submitBtn = $('.sendMail');
  var toAddr = $('#toEmail').val();
  var fromAddr = $('#inputEmail').val();
  var subject = $('#inputSubject').val();
  var body = $('#inputBody').val();

  if (fromAddr != "" && subject != "" && body != ""){
    $('.sendMail').removeClass('disabled');
    $('a.sendMail').attr('href', 'mailto:'+toAddr+'?subject='+subject+'&body='+body);
  } else {
    $('.sendMail').addClass('disabled');
  }
});

$(window).scroll(function() {
  if ($(this).scrollTop() <= $('.top').height()) {
    if ($(this).scrollTop() <= 40) {
      $('.navbar').css('background-color', 'transparent').fadeIn();
    } else if($(this).scrollTop() == $('.top').height()) {
      $('.navbar').css('background-color', 'transparent').fadeIn();
    } else {
      $('.navbar').css('background-color', 'transparent').fadeOut();
    }
  } else {
    $('.navbar').css('background-color', '#490a3d').fadeIn();
  }
  ($(this).scrollTop() > offset) ? toTop.addClass('topBtn-visible'): toTop.removeClass('topBtn-visible topBtn-fadeOut');
  if ($(this).scrollTop() > offset_opacity) {
    toTop.addClass('topBtn-fadeOut');
  }
});

toTop.on('click', function(event) {
  event.preventDefault();
  $('body,html').animate({
      scrollTop: 0,
    }, scroll_top_duration);
});
