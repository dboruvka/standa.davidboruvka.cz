
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

