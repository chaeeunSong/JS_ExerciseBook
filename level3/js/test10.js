/**
// 저번시간 숙제 : 버튼을 누르면 데이터를 받아와서 h4 태그에 집어넣으려면?
$('#hello_bt').click(function(){
    $.ajax({
        url :'https://codingapple1.github.io/hello.txt',
        type : 'GET'
    }).done(function(받아온글씨){
        $('#hello').html(받아온글씨);
    });
});

// 개념 하나만 더. ajax() 함수의 세부 기능들이 많음

    $.ajax({
        url :'https://codingapple1.github.io/hello.txt',
        type : 'GET',
        data : '' , // 서버에 데이터를 실어보낼수있다
    }).done(function(받아온글씨){
        $('#hello').html(받아온글씨);
    }).fail(function(){     // 2. fail() 함수 (ajax 실패시 실행할 코드)
        
    }).always(function(){   // 3. always() 함수 (ajax 요청시 실패하든 성공하든 항상 실행할 코드.. 로딩중입니다 페이지같은?)
        
    });
**/



/**
 * 어떤 서버에 요청해서
 * 상품제목
 * 상품설명이나 가격
 * 상품 이미지 경로
 * 받아온 뒤에 데이터바인딩
 *
 * Q.URL을 어디로 요청하는지 어케알죠?
 *   - 서버개발자에게 물어보심 됨니다.
 * */

// Ajax 요청으로 상품을 불러오자
$('#product_bt').click(function(){
    $.ajax({
        url :'https://codingapple1.github.io/data.json ',
        type : 'GET'
    }).done(function(데이터){
        $('.card-title').html(데이터.model);   // 데이터라는 {object} 에서 모델명을 출력하려면?
        $('.card-text').html(데이터.price);
        $('.card-img-top').attr('src',데이터.img); // 이미지경로수정은 attr() 사용
    });
});


