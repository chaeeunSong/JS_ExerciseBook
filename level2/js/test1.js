
    // 모달창 열기
    $('#open_modal').on('click',function(){
        $('.black-background').fadeIn();
    })

    // 모달창 닫기
    $('#close_modal').on('click',function(){
        $('.black-background').fadeOut();
    })

    // nav 아코디언 메뉴
    $('#nav-sub-button').click(function(){
        $('.nav-sub').slideToggle();
    });


    // 만약에 이메일 input에 입력된 값이 빈칸인 경우, 폼의 전송을 막음, 안내문을 띄움
    // 만약에 패스워드 input에 입력된 값이 빈칸인 경우, 폼의 전송을 막음, 안내문 띄움

    /*
    var 이름 = 'John asbs sdfdsa sdf';
    var 나이 = '29';
    자바스크립트는 html 요소를 찾는게 느리다. 변수로 요소를 담아서 사용하면 더 빨르게 찾을수있어서 변수를 활용해서 사용하자

    변수마스터
    1. 선언 : var 나이 (변수를 만들겠소)
    2. 할당 : 나이 = 20 (값을 집어넣는것. 등호)
    3. 범위 : 변수가 쓰이는 범위, 일반적으로 function 내부
    */

    var age = 20;
    // 셀렉터로 찾은 요소를 변수로 담아보자.
    var emailValue = $('#exampleInputEmail1');
    var passwordValue = $('#exampleInputPassword1');
    $('form').on('submit',function(e){
        if( emailValue.val() == ''){
            e.preventDefault();
            alert('이메일을 입력해주세요')
        }if(passwordValue.val() == ''){
            e.preventDefault();
            alert('패스워드를 입력해주세요')
        }
    });

    /* 함수안에서 선언하고 할당한 변수 emailValue,passwordValue는 함수안에서 죽고 사는애
    함수 밖에서 선언하고 할당한 변수 age는 함수 밖이나 함수 안이나 다 사용가능. 전역변수 = 전역에서 쓸 수 있는 변수 */

    /*
        자바스크립트 최신 문법 ES6

        var 나이 = 20;
        재선언이 가능
        범위가 function. function 안에서 살고 죽는애

        let 나이 = 20;
        재선언이 불가능한 변수를 만들 때 -> let 나이 = 21; << 이런거 안됨
        범위가 {}, function 포함, if문 등등... 범위가 작음

        const 나이 = 20;
        재선언이 불가능한 변수를 만들 때, 재할당이 불가능한 변수를 만들 때
        범위가 {}, function 포함, if문 등등... 범위가 작음
        프론트엔드 환경에선 변경이 불가능한, 아니면 변경이 금지된 그런 값을 만들고 싶을때가 별로없다.
     */
