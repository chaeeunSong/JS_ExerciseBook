
// 모달창 열기, 닫기
$('#open_modal').click(function(){
    $('.black-background').addClass('action');
});
$('#close_modal').click(function(){
    $('.black-background').removeClass('action');
});


/**
 * 이메일, 비번 폼 전달
 * 정규식으로 이메일 형식 검증하기
 * 이메일 형식 검증기능 만들기
 *
 * 문자를 검사할 때 쓰는 정규식
 * /abc/.test('abcdefg') -> 지금 'abcdefg'에 abc라는 글자가 있나요?
 * 콘솔에 찍어보면 결과가 나옴
 * true/false가 남으면 if문에서 조건식처럼 써도 되겠네!
 * 
 * 간단한 정규식 문법
 * (데이터마이닝쪽이 아니라면 보통 외우지않고 찾아서 씁니다.. 이메일 정규식 구글검색 고고...)
 *
 * [찾을 문자의 범위]
 * /[A-z]/.test('sdfsdf')
 * /[ㄱ-ㅎ]/.test('sdfsdf')
 *
 * \S (특수문자 포함 모든 문자 1개, 대문자S)
 *  + (뒤에도 계속 찾아주세요)
 *  \ (. 점같은 특수 문법기호들 escape 처리)
 * /\S/.test('ㄴ')
 * /\S/.test('#')
 *
 * 간단한 이메일 정규식 작성하기
 * /\S+@\S+\.\S+/
 * 모든문자 골뱅이, 모든문자 점, 모든문자
 *
 *  /\S+@\S+\.\S+/.test('aug0901@naver.com')
 *  
 *  숙제1. 제대로 된 이메일 정규식 찾아오기
 *  숙제2. 패스워드 입력란에 대문자 들어있는지 검사
 *  숙제3. 이메일 input 공백 검사 & 이메일 형식 검사 둘다 하려면?
 *
 * */

// 숙제
var age = 20;
var emailValue = $('#exampleInputEmail1');
var passwordValue = $('#exampleInputPassword1');

// 숙제1. 제대로 된 이메일 정규식 찾아오기
var emailCheck = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;

// 숙제2. 패스워드 입력란에 대문자 들어있는지 검사
// var passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])/;
var passwordCheck = /^(?=.*[A-Z])/;


// 숙제3. 이메일 input 공백 검사 & 이메일 형식 검사 둘다 하려면?
$('form').on('submit',function(e){
    if(emailValue.val()==""){
        e.preventDefault();
        alert('이메일을 입력하세요');
    }else if(emailCheck.test(emailValue.val()) == false){
        e.preventDefault();
        alert('이메일 형식이 아닙니다');
    }else if(passwordCheck.test(passwordValue.val()) == false){
        e.preventDefault();
        alert('비밀번호는 대문자가 포함되어야합니다.');
    }else{
        alert('통과');
    }
});




// var age = 20;
// var emailValue = $('#exampleInputEmail1');
// var passwordValue = $('#exampleInputPassword1');
//
// // 이메일 형식 정규식을 변수로 저장
// var checkComent = /\S+@\S+\.\S+/;
//
// // 이메일 input의 값이 이메일형식이 아니면 폼 전송 X
// $('form').on('submit',function(e){
//     // 만약에 지금 이메일 input에 입력된 값이 정규식과 비교했을때 false인 경우 폼전송막기, 안내창띄우기
//     if(checkComent.test(emailValue.val()) == true){
//         alert('딩동댕')
//     }else{
//         e.preventDefault();
//         alert('노노노')
//     }
// });

