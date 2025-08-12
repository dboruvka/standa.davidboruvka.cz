
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

