
$(document).ready(function() {
    

 if (dataLayer[0].shoptet.pageType === "productDetail") {
var newContent = $('#description .basic-description').html();
    $('.p-short-description').after(newContent);

}

});
