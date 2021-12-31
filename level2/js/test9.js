
// 모달창 열기
$('#open_modal').on('click',function(){
    $('.black-background').fadeIn();
})

// 모달창 닫기
$('#close_modal').on('click',function(){
    $('.black-background').fadeOut();
})

// nav 아코디언 메뉴
$('#nav-sub-button').click(function(){
    $('.nav-sub').slideToggle();
});



/**
 * 새로 배울 개념 "이벤트 버블링" (이벤트가 상위 요소로 퍼지는 현상)
 * 요소를 클릭해도 요소 위의 부모태그들도 클릭했다고 인식함.
 *
 * */


// 이벤트 버블링 때문에 모달창 내 다른 요소를 눌러도 닫힌다.
/*
$('.black-background').click(function(){
    $('.black-background').hide();
});
*/

$('.black-background').click(function(e){

    e.target;   // 지금 실제로 클릭한 요소
    e.currentTarget;    // 지금 이벤트 리스너가 달린 곳
    $(this);    // e.currentTarget; 과 같은뜻.
    e.preventDefault();     // 기본동작 막기

    //이벤트 함수로 버그를 해결 하는 법
    // 만약에, 지금 실제로 클릭한게 검은배경일 때만 모달창을 닫아라.
    if(e.target == e.currentTarget){
        $('.black-background').hide();
    }


    /**
     * e.target 은 쌩 JS문법, $('.black-background')은 JQUERY 문법이기 때문에 같을수가없다.
     * 생 JS로 비교하려면 둘다 JS로 비교해야하고, JQUERY로 비교하려면 JQUERY로 비교해야함.
     * e.target 은 this로 비교할수도있다.
     * */

    // 안됨
    /*
    if(e.target == $('.black-background')){
        $('.black-background').hide();
    }
    */

    // 가능
    /*
    if(e.target == this){
        $('.black-background').hide();
    }
    */

});



















