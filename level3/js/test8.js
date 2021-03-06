var products = [
    {
        id : 0,
        price : 70000,
        title : 'Blossom Dress'
    },
    {
        id : 1,
        price : 50000,
        title : 'Springfield Shirt'
    },
    {
        id : 2,
        price : 60000,
        title : 'Black Monastery'
    }
];

// Q. products라는 array 가격순 정렬? sort() 함수 활용하여 구현해보자.
$('#sort_btn1').click(function(){   // 1. 버튼을 누르면
    products.sort(function(a,b){    // 2. products 정렬해주세요
        return a.price - b.price
        // a와 b는 products array 안에 있는 각각의 한 오브젝트, 그 안의 price를 가져온다.
    });

    // ^ 여기까지 하고 실행 후 콘솔창에 products 를 찍어보면 완성되어있다.

    // 근데 왜 HTML은 안바뀜? 코드를 안짰으니까~ 정렬된대로 html 바꿔줄 코드를 가져오자.
    // 3. 그리고 데이터 바인딩 해주세요.
    $('.title').eq(0).html(products[0].title);
    $('.price').eq(0).html('가격 : ' + products[0].price);
    $('.title').eq(1).html(products[1].title);
    $('.price').eq(1).html('가격 : ' + products[1].price);
    $('.title').eq(2).html(products[2].title);
    $('.price').eq(2).html('가격 : ' + products[2].price);
});

/**
 *
 * 숙제 1. 가나다순 정렬버튼 & 기능 제작
 * 숙제 2. 5만원 이하 필터버튼 & 기능 제작
 *      - html을 동적으로 생성하라
 *      1. 우선 상품목록 다 비워두고
 *      2. 버튼 누르면 products에서 5만원 이하 상품만 남김
 *      3. products array 갯수만큼 HTML 동적으로 생성해주셈~
 *
 * */

// 숙제 1. 가나다순 정렬버튼 제작. 문자열 오름차순 정렬
$('#sort_btn2').click(function(){
    products.sort(function(a,b){
        if (a.title>b.title) return 1;
        if (a.title<b.title) return -1;
        return 0;
    });

    $('.title').eq(0).html(products[0].title);
    $('.price').eq(0).html('가격 : ' + products[0].price);
    $('.title').eq(1).html(products[1].title);
    $('.price').eq(1).html('가격 : ' + products[1].price);
    $('.title').eq(2).html(products[2].title);
    $('.price').eq(2).html('가격 : ' + products[2].price);
})

// 숙제 2. 5만원이하 가격필터 버튼 & 기능 만들어오셈
// 5만원이하 버튼을 누르면 products라는 array에서 5만원 이하만 필터함
$('#sort_btn3').click(function(){
    var productstwo = products.filter(function(a){
        return a.price<=50000
    })
    //console.log(productstwo[0].price);

    // products라는 array 갯수만큼 상품 HTML을 동적으로 생성해주셈~
    for(var i = 0; i < productstwo.length; i++){
        var fiveboxtitle = `<div>${productstwo[i].title}<div>`
        var fiveboxprice = `<div>${productstwo[i].price}<div>`
        $('.five_card .title').append(fiveboxtitle);
        $('.five_card .price').append(fiveboxprice);
    }

    $('.five_card').show();
})
