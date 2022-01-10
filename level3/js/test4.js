
/**
 * 반복문으로 26,28,30... option 을 생성하려면?
 *
 * For 반목문을 이용한 방법
 * 1. 반복문이 돌 때 26,28,30 이 되는 변수?를 넣자
 * 2. `역따옴표 문자 중간에 ${변수} 넣는 법` - 자바스크립트 바벨 문법
 * 3. i = 0 일때 1회 반복, i = 1 일때 1회 반복, i = 5 일때 1회 반복
 *
 * */

// var 사이즈 = [26,28,30,32,34,36];
//
// $('#option1').on('change', function(){
//     if($('#option1').val() == '바지'){
//
//         for(var i = 0; i < 6; i++){
//             var 템플릿 = `<option>${사이즈[i]}</option>`
//             $('#option2').append(템플릿);
//         }
//
//     }
//
// });


/**
 *
 * ForEach 반복문을 이용한 방법
 *  1.어레이.forEach()로 반복하기
 *  2. forEach() 함수 안에는 콜백함수가 들어감. = 왼쪽 array 자료 갯수만큼 반복해주셈.
 *  3. i 값은 사이즈 안에있는 하나하나의 데이터
 *  4. 그냥 반복문의 i는 0,1,2,3,4였지만,
 *  여기서의 i는 array에 담긴 26,28,30,32,34,36 이라는 값.
 *  ${사이즈[i]}에서 사이즈를 제거해줘야함.
 *
 * */

var 사이즈 = [26,28,30,32,34,36];

$('#option1').on('change', function(){

    if($('#option1').val() == '바지'){

                    // 콜백함수가 들어감 = 왼쪽 array 자료 갯수만큼 반복해주셈.
                    // 여기서의 i는 26,28,30,32,34,36 이라는 값 ${사이즈[i]}에서 사이즈를 제거해줘야함
        사이즈.forEach(function(i){
            // 6번 반복해줌
            // i 값은 사이즈 안에있는 하나하나의 데이터
            var 템플릿 = `<option>${i}</option>`;
            $('#option2').append(템플릿);
        });
    }

});