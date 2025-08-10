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