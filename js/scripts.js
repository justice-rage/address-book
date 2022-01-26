$(document).ready(function() {
  $(".clickable-js").click(function() {
    $("#js-def-showing").toggle();
    $("clickable").removeClass();
    $("#js-def-hidden").show();
  });

  $(".clickable-string").click(function() {
    $("#string-def-showing").toggle();
    $("clickable").removeClass();
    $("#string-def-hidden").show();
  });
});