
// 스크롤바를 내리면..
// .nav-menu 이 background : white;

// Scroll Event 사용법
// $(window).on('scroll',function(){
// // 윈도우는 viewport 웹상의 전체 화면을 뜻함 = viewport 가 scroll 되었을 때... 코드를 실행해주세요
//     console.log('안녕');
// })

// 1.내리자 마자 동작해서 어색함
// $(window).on('scroll',function(){
//     $('.nav-menu').addClass('navBlack')
// });



// 2.만약에 스크롤을 100px이상 했을때 동작하라
$(window).on('scroll',function(){
    // 현재 스크롤된 높이를 알려주는 착한 JQuery 함수 = $(window).scrollTop
    if($(window).scrollTop() > 100){
        $('.nav-menu').addClass('navBlack')
        // 숙제 1. 스크롤 내리면 폰트사이즈 서서히 작아지게
        $('.nav-menu h4').addClass('fontStyle')

    // 숙제 2. 다시 스크롤 올리면 원상태로 애니메이션 제거
    }else if($(window).scrollTop() < 100){
        $('.nav-menu').removeClass('navBlack');
        $('.nav-menu h4').removeClass('fontStyle')
    }
})

// 오늘의 숙제
// 1. 스크롤 내리면 폰트사이즈 서서히 작아지게
// 2. 다시 스크롤 올리면 원상태로 애니메이션 제거


/**
 * scroll 이벤트 리스너는 많이 쓰면 안됩니다
 * 이 이벤트 리스너는 1초에 최대 60번 실행해주는 이벤트리스너이기 때문에
 * 스크롤 이벤트를 사용할때에는 웹사이트 성능을 신경써야한다
 *
 * 스크롤 이벤트의 정석을 보여주는 애플 웹사이트.. 공부해보자...
 * **/