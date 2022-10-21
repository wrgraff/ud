$('.address-list input').change(function() {
    var isChecked = $('input#new:checked').length;
    console.log(isChecked);
    if ( isChecked > 0 ) {
        $('#new-address').slideDown(250);
        console.log('input new checked');
    } else {
        $('#new-address').slideUp(250);
        console.log('input ready checked');
    }
});
