
/**
 * 한글부터 작성하자..
 *
 * 1. 버튼을 누르면...
 * h1 빈칸으로 만들고
 * 0.5초 후에 h1안에 a를 더함
 * 0.5초 후에 h1안에 b를 더함
 * 0.5초 후에 h1안에 c를 더함
 *
 * 0.5초 후에 코드를 실행하려면? = setTimeout() 함수 사용
 *
 * setTimeout(function(){
 *
 * }, 1000)
 * 
 * 2. h1 내용 빈칸으로 만들기
 * h1태그.innerHTML = '';
 *
 * */

var h1태그 = document.querySelector('h1');    // h1 태그
var 원래글씨 = document.querySelector('h1').innerHTML;    // h1 원래있던글씨

// $('button').click(function(){   // 1. 버튼을 누르면
//     h1태그.innerHTML = '';    // 2. h1 내용 빈칸으로 만들기
//
//     setTimeout(function(){
//         // 3. 0.5초 후 h1안에 a를 더함
//         h1태그.innerHTML = h1태그.innerHTML + 원래글씨[0]  // 문자자료형[0] 가능
//     },500)
//
//         // 4. 1초 후 h1안에 b 더함
//     setTimeout(function(){
//         h1태그.innerHTML = h1태그.innerHTML + 원래글씨[1]  // 문자자료형[0] 가능
//     },1000)
//
//     // 이 방법은 하드코딩 방법으로 매우 좋지않다. 반복문을 활용하여 리팩토링해보자~
//
// });

$('button').click(function(){
    h1태그.innerHTML = '';
    // setTimeout 함수에 반복문 돌리기
    for(let i = 0; i<원래글씨.length; i++){
        setTimeout(function(){
            h1태그.innerHTML = h1태그.innerHTML + 원래글씨[i] // i가 undefined가 된 이유
        },500*i)    // 500 * i 를 활용 (반복문 돌며 500,1000,1500 ...)
    }
})

/**
 *
 * i가 undefined가 된 이유
 * 반복문은 매우 빨리 실행됨
 * 반복문은 0.001초만에 6번 반복끝냄 & 변수 i는 6이 되어버림
 * 근데 setTimeout은 0.5초 후에 실행함
 * 0.5초 후에 실행하려고 봤더니 i가 6밖에 없음
 * for 반복문을 쓸땐 let으로 고쳐야 함
 *
 * 응용 : 한글 자음 모음 타이핑 효과?
 * 한글의 특수성으로 인하여
 * ㅇ
 * 아
 * 안
 * ㄴ
 * 녀
 * 녕
 * 이런식으로 지웠다가 자음붙혔다가 지웠다가 모음더했다가 하는 식으로 해야하는데
 * 굉장히 골치아픔.. 하드코딩 안할수가없음
 * 한글 타이핑 효과 라이브러리를 쓰자
 *
 * */

// 함수화하기
// 함수화할 땐 변수들에 주의하세요. 변수를 파라미터로 바꿔줘야 다른데도 적용가능
$('button').click(function(){
    애니매이션(h1태그, 원래글씨);
});

function 애니메이션(h1태그, 원래글씨){
    h1태그.innerHTML = '';
    // setTimeout 함수에 반복문 돌리기
    for(let i = 0; i<원래글씨.length; i++){
        setTimeout(function(){
            h1태그.innerHTML = h1태그.innerHTML + 원래글씨[i] // i가 undefined가 된 이유
        },500*i);    // 500 * i 를 활용 (반복문 돌며 500,1000,1500 ...)
    }
}