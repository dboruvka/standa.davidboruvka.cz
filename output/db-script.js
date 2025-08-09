$(document).ready(function() {
    if ($('#navigation').length) {
        $('#navigation').insertBefore('.search');
    }

    $('.top-navigation-contacts').remove();

});
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

$(document).ready(function() {


$('.id-1 .welcome-wrapper').insertBefore($('.homepage-group-title').first());
  
$('.welcome h1').each(function(){
  var words = $(this).text().split(' ');
  $(this).empty();
  $.each(words, function(i, word){
    $('<span>', {
      'class': 'w' + (i+1),
      'text': word
    }).appendTo($('.welcome h1'));
    if (i < words.length - 1) $('.welcome h1').append(' ');
  });
});


});


if (dataLayer[0].shoptet.pageType === "cart")
{
    if ($('#navigation').length) {
        $('#navigation').insertBefore('.search');
    }
}

$(document).ready(function() {

   // $('#footer .site-name').remove();    

    $('#footer #signature').append(' &amp; <a href="https://davidboruvka.cz/?utm_source=footer&amp;utm_medium=link&amp;utm_campaign=shoptet" target="_blank" title="Tvorba eshopů na shoptetu">David Borůvka</a>');

});