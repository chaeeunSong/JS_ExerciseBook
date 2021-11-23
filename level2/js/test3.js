
/**
 * 요즘 스타일 애니메이션 개발 방법
 * 1. 시작화면, 최종화면 만들기
 * 2. 자바스크립트로 트리거하기
 * 3. 스무스한 동작은 animate() 함수 사용하지 않음.
 *    css를 이용하거나, addClass가 더 빠름.
 * */

/*
// 1. css() 함수 활용
$('#open_modal').click(function(){
    $('.black-background').css('top', '0px');
});

$('#close_modal').click(function(){
    $('.black-background').css('top','-1000px');
});
*/

// 2. addClass, removeClass 활용
$('#open_modal').click(function(){
    $('.black-background').addClass('action');
})
$('#close_modal').click(function(){
    $('.black-background').removeClass('action');
})