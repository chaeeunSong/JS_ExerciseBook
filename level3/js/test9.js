
/**
 *
 * Ajax : 서버에 데이터를 요청해서 받아오는데 새로고침 없이 받아오기
 * 
 * 서버 : 접속자가 요청을 하면 데이터를 갖다줌
 * 요청 : 요청의 종류(request)
 *       GET : URL을 입력해서 요청함 (읽기)
 *       POST : 숨겨서 뭔가 정보를 전달하거나 요청함 (쓰기)
 *       PUT : ~~
 *       DELETE : ~~
 *
 * AJAX : 서버에다가 GET/POST 요청을 할 수 있게 도와주는데 새로고침 없이
 *        요청할 수 있음
 *
 * Ajax 요청하는 법 = JQUERY (자바스크립트로도 가능하나 코드가 복잡한편이라 JQUERY로 사용하는 추세)
 *
 * 문법
 * $.ajax({
 *  url : 'http://naver.com',    // naver.com 에 GET 요청하는 코드 (그럼 뭔가 데이터를 가져옴)
 *  type : 'GET'
 * });
 *
 * 예시
 * $.ajax({
    url : 'https://codingapple1.github.io/hello.txt',    // 위 주소에 GET 요청을 해서 보내주는 데이터를 가져와라~
    type : 'GET'
}).done(function(데이터){ // done() : ajax 요청이 성공했을때 뭔가를 실행시켜주세요
    console.log(데이터);
    // ^ 이것이 받아온 데이터
});
 *
 * */


$.ajax({
    url : 'https://codingapple1.github.io/hello.txt',    // 위 주소에 GET 요청을 해서 보내주는 데이터를 가져와라~
    type : 'GET'
}).done(function(데이터){ // done() : ajax 요청이 성공했을때 뭔가를 실행시켜주세요
    console.log(데이터);
    // ^ 이것이 받아온 데이터
});


