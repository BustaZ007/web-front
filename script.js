$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false
    });
    $("#enter").click(function( event ){
        event.preventDefault();
        $(".overlay").fadeToggle("fast");
    });

    $(".close").click(function(){
        $(".overlay").fadeToggle("fast");
    });

    $(document).keyup(function(e) {
        if(e.keyCode === 27 && $(".overlay").css("display") !== "none" ) {
            event.preventDefault();
            $(".overlay").fadeToggle("fast");
        }
    });
});

