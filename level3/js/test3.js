
    $('#option1').on('change', function(){
        if( $('#option1').val() == '셔츠' ){
            // #option안에 있는 html들을 말끔히 지워주셈 (HTML이 남아있는 버그를 해결해보자)
            $('#option2').html(' ');

            // 템플릿을 만들고 .append() : 특정 HTML을 안에 넣어주세요
            // 자바스크립트 따옴표 안에서 엔터키 금지 `문자자료형` 은 내부에 엔터키 가능 (신자바스크립트 문법 : 바벨)
            var 템플릿 = '<option>95</option><option>100</option><option>105</option>' ;
            $('#option2').append(템플릿);

        }else if( $('#option1').val() == '바지' ){
            // #option안에 있는 html들을 말끔히 지워주셈 (HTML이 남아있는 버그를 해결해보자)
            $('#option2').html(' ');

            // 만약에 사용자가 입력한값이 '바지'면 바지용 option 템플릿을 만들어서 원하는곳에 append(템플릿);
            var 템플릿 ='<option>28</option><option>30</option><option>32</option>';
            $('#option2').append(템플릿);
        }
    });
