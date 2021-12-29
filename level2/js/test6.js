$('.slide-2').click(function(){
    $('.slide-container').addClass('action1');
});

$('.slide-3').click(function(){
    $('.slide-container').addClass('action2');
});

// 오늘의 숙제 1. 버튼1 개발 2. next 버튼 개발
$('.slide-1').click(function(){
    $('.slide-container').addClass('action3');
});

//지금 몇번째 사진을 보고있는지 저장용, 현재 몇번째 사진을 보고있는지 변수로 저장하는 패턴
// var 지금보이는사진 = 1;
//
// $('.slide-next').click(function(){
//     //만약에 지금 사진1이 보이면
//     if(지금보이는사진 == 1){
//         //사진2를 보여주시고요
//         $('.slide-container').addClass('action1');
//
//         //지금 보이는 사진이 2라고 알려주거나 또는 저장해야함
//         지금보이는사진 = 지금보이는사진 + 1;
//
//     }else if (지금보이는사진 == 2){
//         $('.slide-container').addClass('action2');
//         지금보이는사진 = 지금보이는사진 + 1;
//     }else if(지금보이는사진 == 3){
//         $('.slide-container').addClass('action3');
//     }
//         //만약에 지금 사진2가 보이면 사진3을 보여주시고요
// })

// 확장성 있는 코드로 다시 개발 (사진이 몇개있던 코드를 추가하지않고 넘어가는..)
var 지금보이는사진 = 1;

$('.slide-next').click(function(){
    $('.slide-container').css('transform','translateX(-' + 지금보이는사진 + '00vw)');
    if(지금보이는사진 < 2){
        지금보이는사진 = 지금보이는사진 + 1;
    }
});


$('.slide-before').click(function(){
    $('.slide-container').css('transform','translateX(-' + (지금보이는사진 - 2) + '00vw)');
    if(지금보이는사진 > 1){
        지금보이는사진 = 지금보이는사진 - 1;
    }
})