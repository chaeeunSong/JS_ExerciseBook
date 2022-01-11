    /**
     *
     * 웹개발 방식이 여러개 있는데
     * 1. 서버가 HTML 파일 완성해서 유저에게 보내는 방식
     * 2. 서버가 빈 HTML파일 + 데이터 보냄 그후 JS를 이용해서 채워넣기
     *    서버에서 데이터 가져오는 법은 Ajax 배우면 가능
     *
     * 지금은 ajax를 사용하지 않고..
     * 상품 데이터를 가져왔다고 치고 그걸 HTML에 꽃아놓는 실습을 해보자
     *
     * */

    // 서버가 보낸 쇼핑몰 상품데이터, 얘를 HTML에 꽃아 넣자
    // array 자료형인데 object가 3개 들어있는 array
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

    $('.title').eq(0).html(products[0].title);
    $('.price').eq(0).html('가격 : ' + products[0].price);

    // 오늘의 숙제 : 코드 잘짜서 상품 3개 다 진열해놓으셈
    $('.title').eq(1).html(products[1].title);
    $('.price').eq(1).html('가격 : ' + products[1].price);
    $('.title').eq(2).html(products[2].title);
    $('.price').eq(2).html('가격 : ' + products[2].price);