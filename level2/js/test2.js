/**
 * css에선 margin-left 에 하이픈이 들어가지만 자바스크립트에선 하이픈을 넣을수없다
 * 자바스크립트에선 camelCase 작명법으로 이어지는 단어첫글자에 대문자로 표현. marginLeft
 * */

$('#hi').click(function(){
    //$('#hi').animate({ marginLeft : '100px'}); // animate() 함수 사용법
    //$('#hi').animate({ marginLeft : '100px', marginBottom : '100px'}); // animate()함수는 콤마(,)로 css속성을 늘릴수있다
    //$('#hi').animate({ marginLeft : '100px' },1000);    // jQuery animate({css속성}, 동작속도)
});


$('#show-menu').click(function(){
    $('.left-menu').animate({ marginLeft: '0px' },1000);
});


/**
 * 모달창열기 숙제
 * animate() 함수를 사용하여 위에서 아래로 내려오는 모달창을 구현하라.
 * */

$('#open_modal').click(function(){
    $('.black-background').animate({bottom:0},1000);
    // $('.black-background').show().animate({bottom:0},1000); // jQuery 함수들 순서대로 실행하기 스킬

});

$('#close_modal').click(function(){
    $('.black-background').animate({bottom:1000},1000);
});
