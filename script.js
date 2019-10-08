var translateWidth = 0;
var slideInterval = 4000;
var flag = true;
var list = document.getElementById('slidewrapper');
var firstLi = list.getElementsByTagName('LI')[0];
var navBtnId = 0;
var checkSlide = 1;

$(document).ready(function () {
    checkSlidePointer();
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function(){
        clearInterval(switchInterval);
    },function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });
});

function nextSlide() {
    if(flag){
        flag = false;
        $('#slidewrapper').css({
            'transform': 'translate(0, 0)',
            'transition':' 0s'});
        translateWidth = -$('#viewport').width();
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            'transition':' 1s',
            'transition-timing-function': 'ease-in-out'
        });
        checkSlide = 2;
        checkSlidePointer();
    } else{
        translateWidth = -$('#viewport').width() * 2;
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            'transition':' 1s',
            'transition-timing-function': 'ease-in-out'
        });
        flag = true;
        checkSlide = 1;
        checkSlidePointer();
    }
}

function checkSlidePointer(){
    if(checkSlide == 1){
        $('#first').css({
            'background-color': '#346491'
        });
        $('#second').removeAttr("style");

    }else{
        $('#second').css({
            'background-color': '#346491'
        });
        $('#first').removeAttr("style");
    }
}

$('.slide-nav-btn').click(function() {
    navBtnId = $(this).index();
    if (navBtnId + 1 != checkSlide) {
        if(checkSlide == 1){
            $('#slidewrapper').css({
                'transform': 'translate(0, 0)',
                'transition':' 0s'});
        }
        translateWidth = -$('#viewport').width() * (navBtnId);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            'transition':' 1s',
            'transition-timing-function': 'ease-in-out'
        });
        if(checkSlide == 1){
            checkSlide = 2;
            checkSlidePointer();
            flag = false;
        }else{
            checkSlide = 1;
            checkSlidePointer();
            flag = true;
        }
    }
});