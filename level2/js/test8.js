
/**
 *
 * 첫번째 버튼의 기능 먼저 만들어보자
 * 버튼0 (products)을 누르면...
 * 0. 버튼0 버튼1 버튼2에 붙은 주황색 제거 (그냥 모든 버튼에서 주황색 제거)
 * 0. 내용0 내용1 내용2를 안보이게
 * 1. 버튼0이 주황색으로 하이라이트 되어야함
 * 2. 내용0이 보여야함
 *
 *
 * */

// .eq(X) 내가 찾은 것 중 X번째껏만 재선택할 때 사용
/*
$('.tab-button').eq(0).click(function(){
    // 다 삭제하는건 제일 위에 작성
    $('.tab-button').removeClass('active')
    $('.tab-content').removeClass('show')

    $('.tab-button').eq(0).addClass('active')
    $('.tab-content').eq(0).addClass('show')
});
*/

// 위에껀 하드코딩 노다가식. 확장성있는 코드로 바꿔주자

/*
for (var i = 0; i < 3; i++){
    console.log('안녕')
}
*/

/**
 *  for 반복문의 원리
 *  i = 0 / 반복문 1회실행 / i에 1을 더함
 *  i = 1 / 반복문 1회실행 / i에 1을 더함
 *  i = 2 / 반복문 1회실행 / i에 1을 더함
 *  i = 3 / i < 3을 만족하지 않아서 멈춤
 *
 *  tab 기능의 eq(0)을 eq(i)로 치환한다
 *  var 말고 let을 쓰자
 *  let 이라는 변수는 범위가 작기 때문에 (존재 범위가 {}인 변수)
 *  for 반복문 안에 이벤트리스너 안에 i 변수가 있으면 let으로 바꿔야 잘 동작함. 왜냐면 let이라는 변수는 for문 안에 존재하기 때문에..
 *  신문법 나왔으니 for 반목문 안에선 let을 사용하자.
 *
 *  하지만 아직 완벽하게 확장성 있는 코드가 아니다
 *  탭버튼이 늘어날때마다 우리는 i<3의 조건식을 늘려줘야할까?
 *  i < 지금 html에 있는 tab-button의 갯수; 로 수정 ㄱㄱ
 *
 * */

/*
for (let i = 0; i < 3; i++){
    $('.tab-button').eq(i).click(function(){
        // 다 삭제하는건 제일 위에 작성
        $('.tab-button').removeClass('active')
        $('.tab-content').removeClass('show')

        $('.tab-button').eq(i).addClass('active')
        $('.tab-content').eq(i).addClass('show')
    });
}
*/

var buttonLenth = $('.tab-button').length;

for (let i = 0; i < buttonLenth; i++){
    $('.tab-button').eq(i).click(function(){
        // 다 삭제하는건 제일 위에 작성
        $('.tab-button').removeClass('active')
        $('.tab-content').removeClass('show')

        $('.tab-button').eq(i).addClass('active')
        $('.tab-content').eq(i).addClass('show')
    });
}