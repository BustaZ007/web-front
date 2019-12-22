$(document).ready(function() {
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