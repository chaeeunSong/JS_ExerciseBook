
// 모달창 열기, 닫기
$('#open_modal').click(function(){
    $('.black-background').addClass('action');
});
$('#close_modal').click(function(){
    $('.black-background').removeClass('action');
});


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

