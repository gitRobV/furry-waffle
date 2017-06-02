$(document).ready(function() {

    $('.ninja img').click(function() {
        $(this).fadeOut('slow');
    })

    $('#footer button').click(function() {
        $('.ninja img').show();
    })

});
