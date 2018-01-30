$(document).ready(function() {
  $(".pre_loader").fadeOut("slow");
});

$(".email").hover(function() {
  $(".email_icon").css("background-color", "#ff7473")
}, function() {
  $(".email_icon").css("background-color", "")
});

$(".social_media").hover(function() {
  $(".social_media_icon").css("background-color", "#ff7473")
}, function() {
  $(".social_media_icon").css("background-color", "")
});
