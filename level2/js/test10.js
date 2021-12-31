
/**
 * 이벤트 버블링 등 배웠는데 이걸 이용해서 코드를 멋지게 짤 수도 있음
 *
 * 이벤트 리스너들을 일단 함수로 축약하여 사용.
 *
 * dataset 활용법
 * 셀렉터.dataset.id
 *
 * 오늘의 교훈
 * 1. 이벤트리스너 절약 가능
 * 2. HTML 안에 몰래 정보저장 가능
 *
 *
 * */

// for 반복문 활용법. 하지만 이방법 사용 안할꺼임.
/*
for (let i = 0; i < $('.tab-button').length; i++) {
    $('.tab-button').eq(i).click(function(){
        // 함수로 축약하여 작명.
        탭열기(i);
    });
};
*/

// if 문 활용법. 하지만 이방법 사용 안할꺼임.
/*
$('.list').click(function(e){
   // 만약에 내가 실제 누른 요소가 버튼0 이면 탭0번째 열어주셈 ...
    if(e.target == document.querySelectorAll('.tab-button')[0]){
        탭열기(0);
    }
});
*/


// dataset 활용하여 사용함. 쌩 JS 문법용 (익스플로러11버전 이상만 호환 가능)
$('.list').click(function(e){
    탭열기(e.target.dataset.id)
})

// dataset 활용하여 사용함. JQUERY 문법용 (호환성 생각하면 jquery버전을 더 자주사용할수있음.)
$('.list').data('작명', '값');
$('.list').data('작명');



/**
 * 함수로 축약할 때 확인해야할 점
 * - 함수안의 변수는 정의해주셈
 * */
function 탭열기(숫자){
    $('.tab-button').removeClass('active');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(숫자).addClass('active');
    $('.tab-content').eq(숫자).addClass('show');
}