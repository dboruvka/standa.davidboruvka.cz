$(document).ready(function() {

$('.navigation-buttons a').removeClass('full hovered');



$(function () {
  var $socialItems = $('.contact-box li').filter(function () {
    return $(this).find('.spotify, .facebook, .youtube').length > 0;
  });

  // Přesuň class z <span> na <li>
  $socialItems.each(function () {
    var $li = $(this);
    var $span = $li.find('span').first();

    if ($span.attr('class')) {
      $li.addClass($span.attr('class')); // přidá class ze <span> na <li>
      $span.removeClass();               // odstraní class ze <span>
    }
  });

  // Přesun do hlavního menu
  $('.navigation-in ul.menu-level-1').append($socialItems);
});


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

if ($('.spotify-icon').length) {
  $('.spotify-icon').appendTo('.contact-box ul');
}


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
if (dataLayer[0].shoptet.pageType === "cart")
{
    if ($('#navigation').length) {
        $('#navigation').insertBefore('.search');
    }
}


$(document).ready(function() {


$('.id-1 .welcome-wrapper').insertBefore($('.homepage-group-title').first());

// $(function(){
//     if ($('.id-1').length && $('.site-name > a').length) {
//         var siteNameLink = $('.site-name > a').first().clone();
//         siteNameLink.removeAttr('data-testid').addClass('logo-h1');
//         $('h1').first().before(siteNameLink);
//     }
// });

$('.welcome h1').each(function(){
  var $h1 = $(this);
  var words = $h1.text().split(' ');
  $h1.empty();

  $.each(words, function(i, word){
    $('<span>', {
      'class': 'w' + (i+1),
      'text': word
    }).appendTo($h1);
    if (i < words.length - 1) $h1.append(' ');
  });

  // Přidání <p> s homeText, pokud je definovaný a neprázdný
  if (typeof homeText !== 'undefined' && homeText.trim() !== '') {
    $('<p>', {
      'class': 'hometext',
      'text': homeText
    }).insertAfter($h1);
  }
});

});



$(document).ready(function() {
    

$(function () {
  var $discount = $('.flags.flags-extra .flag-discount');
  if ($discount.length) {
    $discount.each(function () {
      var $this = $(this);
      var sleva = $this.find('.price-save').html(); // necháme span i HTML
      $this.html('Sleva až<br>' + sleva);
    });
  }
});


});


$(document).ready(function() {
    

 if (dataLayer[0].shoptet.pageType === "productDetail") {
var newContent = $('#description .basic-description').html();
    $('.p-short-description').after(newContent);

}

});

$(document).ready(function() {

   // $('#footer .site-name').remove();    

    $('#footer #signature').append(' &amp; <a href="https://davidboruvka.cz/?utm_source=footer&amp;utm_medium=link&amp;utm_campaign=shoptet" target="_blank" title="Tvorba eshopů na shoptetu">David Borůvka</a>');

});
$(".spotifiy_icon").appendTo(".contact-box ul"),$('[data-testid="productCardDescr"]').remove(),$(".cart-empty .empty-cart-boxes").remove(),$(".cart-empty .cart-row").remove(),$(".contact-box>strong").remove(),$(".cart-inner .sidebar-in-cart h4").remove(),$(".spotifiy_icon").appendTo(".contact-box ul");var breakpoint=document.documentElement.clientWidth;breakpoint>1e3&&($(".top-navigation-contacts").before($(".contact-box")),$(window).scroll((function(){$(this).scrollTop()>40?($(".top-navigation-bar").addClass("top-nav-scroll"),$(".top-nav-button-login").addClass("hidden")):($(".top-navigation-bar").removeClass("top-nav-scroll"),$(".top-nav-button-login").removeClass("hidden"))})));