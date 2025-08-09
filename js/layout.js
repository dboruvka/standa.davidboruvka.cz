    $('.spotifiy_icon').appendTo('.contact-box ul');
        $('[data-testid="productCardDescr"]').remove(); // detailní informace záložky
        $('.cart-empty .empty-cart-boxes').remove(); // prázdný košík
        $('.cart-empty .cart-row').remove(); // prázdný košík - sidebar
    $(".contact-box>strong").remove();
$(".cart-inner .sidebar-in-cart h4").remove();


      $('.spotifiy_icon').appendTo('.contact-box ul');

  
  var breakpoint = document.documentElement.clientWidth;

    if (breakpoint > 1000) 
    {
        $('.top-navigation-contacts').before($('.contact-box'));
      
        $(window).scroll(function () {
            if ($(this).scrollTop() > 40) {
                  $(".top-navigation-bar").addClass("top-nav-scroll");
                  $(".top-nav-button-login").addClass("hidden");
            } else {
                  $(".top-navigation-bar").removeClass("top-nav-scroll");
                  $(".top-nav-button-login").removeClass("hidden");
            }
      });     
    } 