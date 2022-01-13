
// 스크롤될때마다 ~을 실행해주세요
$(window).scroll(function(){
    var 높이 = $(window).scrollTop();
    console.log(높이);
    
    // 600 ~ 1200 까지 스크롤바를 내리면, 첫째 카드의 opacity 1~0으로 서서히 변경해주셈
    // 높이가 600 ~ 1200 일 때 0~1이 되는 y는?
    var y = (-1/500) * 높이 + 115/50;
    // y = a * 높이 + b;     // 높이가 650일 때 y는 1
    // 1 = a * 600 + b;
    // 0 = a * 1200 + b;

    var z = (-1/5000) * 높이 + 565/500;
    var a = (-1/1000) * 높이 +230/100
    var b = (-1/10000) * 높이 +1130/1000

    if(높이 < 1200){
        $('.card-box').eq(0).css('opacity', y);
                                        // 600 ~ 1200 스크롤 될 때 opacity 0~1의 값을 가지는 변수를 넣어야함 = y
        $('.card-box').eq(0).css('transform', `scale(${z})`);
    }else if(높이 < 2000){
        $('.card-box').eq(1).css('opacity', a);
        // 600 ~ 1200 스크롤 될 때 opacity 0~1의 값을 가지는 변수를 넣어야함 = y
        $('.card-box').eq(1).css('transform', `scale(${b})`);
    }
})