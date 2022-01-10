
    // Array object
    var 어레이 = [ 'BMW', 520 ];	// 쇼핑몰 내의 데이터. 서버가 이런 데이터를 많이 보냄
    var 오브젝트 = { brand : 'BMW', model : 520 }
    var 자료 = [ { brand : 'BMW' }, { model : 520 } ];

    // Array 출력
    console.log(어레이[1]);
    // Object 출력
    console.log(오브젝트.brand);


    // 데이터 바인딩 실습. 상품 데이터를 꺼내 HTML에 넣어보자
    // Javascript 식
    //document.getElementById('title').innerHTML = 어레이[0];

    // Jquery 식
    $('#title').html(어레이[0]);
    $('#text').html(오브젝트.model);

    // Array, Object가 섞인 복잡한 자료형이 출현한다면?
    //$('#text').html(자료[1].model);
