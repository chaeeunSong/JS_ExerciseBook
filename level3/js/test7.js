
/**
 *
 * array 정렬할 땐 sort() 함수 사용
 * 어레이.sort(); 하면 정렬 가능
 * 하지만 문자 정렬이므로 숫자 정렬은 암기하여 문법에 맞게 써야 함
 * sort() 로 숫자 정렬할땐 이 문법. 이해의 영역이 아님 암기. sort 함수 만든사람이 이렇게 쓰래요!
 *
 * sort() 함수 동작 원리
 * 1. a,b는 array 안의 데이터들
 * 2. +(양수)를 return 하면 a를 오른쪽, b를 왼쪽으로 보냄
 * 2. -(음수)를 return 하면 b를 오른쪽, a를 왼쪽으로 보냄
 *
 * var 어레이 = [7,3,5,2,40];
 * var 어레이문자 = ['a','b','c','d','e'];
 *
 * Q. 1,2,3 순 오름차순 정렬은?
 * 어레이.sort(function(a,b){
 *    return a-b
 *        // 7-3 = 4 (양수) 양수가 나오면 B를 왼쪽으로, A를 오른쪽 으로 보냄으로 오름차순 정렬함 (sort 함수 동작 원리)
 * });
 *
 * Q. 3,2,1 순 내림차순 정렬은?
 * 어레이.sort(function(a,b){
 *    return b-a
 *        // 3-7= -4 (음수) 음수가 나오면 b를 오른쪽, a를 왼쪽으로 보냄으로 내림차순 정렬
 * })
 *
 * Q. abc순 정렬은? = sort() 붙이면 끝임
 * 어레이문자.sort();
 *
 * Q. cba순 정렬은? 심심하면 구현해보셈, 힌트는 문자끼리 부등호 비교 가능
 * 'ㄱ' < 'ㄴ' 자바스크립트에선 'ㄱ'보다 'ㄴ'이 더 크다고 나옴.
 *
 **/


/**
 *
 * array 자료에 필터를 주고 싶을 때 filter()
 * 어떨때 쓸까? 쇼핑몰에 가격 필터링 해주는 UI 만들때.. 버튼누르면 5만원 이하만 남기기
 *
 * 필터함수 쓰는법. 그냥 암기해서 쓰면 됨.
 * 어레이.filter(function(a){
 *     return 조건식
 * })
 *
 * filter() 는 약간 신문법이라 새로운 변수에 담아서 써야한다. sort()는 그럴필요없지만..
 * filter() 는 기존 array 자료를 변형시키지 않는다
 * 그러나 sort()는 기존 array 자료를 변형시킨다.
 * var 어레이 = [7,3,5,2,40];
 * var 뉴어레이 = 어레이.filter(function(a){
 *     return a<4
 * })
 *
 *
 **/

/**
 * array 자료에 전부 뭐 해주고 싶으면 map()
 * 어떨때 쓸까? 쇼핑몰 보면 가격들을 한꺼번에 변동줘야할때.. 버튼 누르면 달러화로 만들어주셈 UI
 *
 * 어레이.map(function(a){
 *     return a*2
 * })
 *
 * 얘도 filter() 처럼 신문법이라 변수로 저장해서 사용해야 함 고로..
 * var 뉴뉴어레이 = 어레이.map(function(a){
 *     return a*2
 *     // 어레이 안에 있는 모든 데이터에 2를 곱하고 싶다..
 * })
 *
 *
 * */


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
$('.my-5 .btn').click(function(){   // 1. 버튼을 누르면
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



// filter() 와 map() 사용법
var 어레이 = [7,3,5,2,40];

var 뉴어레이 = 어레이.filter(function(a){
    return a<4
})

var 뉴뉴어레이 = 어레이.map(function(a){
    return a*2
    // 어레이 안에 있는 모든 데이터에 2를 곱하고싶다..
})

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