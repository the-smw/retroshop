// 1. Dropdown menu

$(document).ready(function () {
    $(".menu").click(function() {
        $(".navbar").toggle(1000, "swing");
    });
});




// Cookie container

$(document).ready(function(){   
    if (window.localStorage.getItem('accept_cookies')) {
          $(".cookie-container").hide();
      }
    
      $(".cookie-btn").click(function() {
     window.localStorage.setItem('accept_cookies', true);
          $(".cookie-container").fadeOut(1000);
      }); 
  }); 





  // Scroll To Top Button

const scrollToTopButton = document.getElementById('js-top');

const scrollFunc = () => {
  let y = window.scrollY; 
  if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};


window.addEventListener("scroll", scrollFunc);


const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {   window.requestAnimationFrame(scrollToTop);
              window.scrollTo(0, c - c / 30);
  }
};


scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}


