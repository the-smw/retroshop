// 1. Side navigation

$(document).ready(function () {
    $(".side").click(function() {
        $(".sidebar").toggle(1000, "swing");
    });
  });





  $(document).ready(function () {
    $(".sidebar ul li").click(function() {
        $(".sidebar").fadeOut(1000);
    });
  });





  