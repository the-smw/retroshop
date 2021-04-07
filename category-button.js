// Category button

$(window).scroll(function() {
    if ($(this).scrollTop()>250)
     {
        $('.side-navigation').show(1000);
     }
    else
     {
      $('.side-navigation').hide(1000);
     }
 });