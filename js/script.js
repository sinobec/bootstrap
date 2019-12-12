//=== Modal ===
$('#login').click(function(){
    $('#loginmodal').modal();
});
$('#reserve').click(function(){
    $('#reservemodal').modal();
}) 

// === Date Picker ===
$('#datepicker').datepicker({
    uiLibrary: 'bootstrap4'
});
$('#timepicker').timepicker({
    uiLibrary: 'bootstrap4'
});

// === Button Switch ===
$('#radioBtn a').on('click', function(){
    var sel = $(this).data('title');
    var tog = $(this).data('toggle');
    $('#'+tog).prop('value', sel);
    
    $('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
    $('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
})

//=== Carousel ===
$("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');
    }
});
