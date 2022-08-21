// JavaScript Document
$(document).ready(function () {
  $(".nav_a").click(function () {
    $(".mainNav button.active").removeClass("active");
    $(this).addClass("active");
    $(".logo").append('<span id="load">LOADING...</span>');
    $("#load").fadeIn(200);
    $("#load").fadeOut(300);
  });
});
