
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

