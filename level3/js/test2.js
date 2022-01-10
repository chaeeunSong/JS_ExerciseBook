
    // 저기  select 인풋에 셔츠라는 값을 선택하면 밑에 그 UI를 보여줌.
    // input 이벤트? change 이벤트 : input 값이 바뀔때 무언가 일어남 하지만 값이 바뀌자마자 일어나는게 아니라 값 변경후 클릭 같은 focus가 되어야 발동. select는 focus랑 상관없는 태그라 가능
    $('#option1').on('change', function(){
        // 만약에 사용자가 선택한 값이 셔츠인 경우에 밑에 그 UI를 보여줌.
        if( $('#option1').val() == '셔츠' ){
            $('.size-select').show();

            // 모자를 선택한 경우 사이즈 선택창을 없애라.
        }else if( $('#option1').val() == '모자' ){
            $('.size-select').hide();
        }

    });
