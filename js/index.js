
//메뉴 누르면 호버로 서브메뉴 나오게 하기 - 왜 안되지? 거지같은 오타
$(function () {
    $('sub').hide();
    $('#mainMenu>li').hover(function () {
        $(this).find('.sub').slideDown();
    }, function () {
        $(this).find('.sub').slideUp();
    });
});

//