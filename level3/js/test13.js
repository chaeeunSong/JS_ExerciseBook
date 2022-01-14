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


/**
 * 이미지 슬라이드 터치 기능 만들기
 *
 * 1. 일단 JS 셀렉터로 기능개발할 요소 찾기
 * 2. new Hammer.Manager() / add() 로 요소등록
 * 3. threshold : 이벤트 작동 역치
 * 4. 매니저.on('pan')
 * 5. 이동한 거리는 e.deltaX
 * 6. 슬라이드한만큼 박스를 왼쪽으로 이동시키자
 *    ^ (e.deltaX)
 * 7. 마우스를 떼면 이미지2가 나옴
 *
 * Hammer.js 에서 제공하는 이벤트 대표적으로..
 * Pan
 * rotate
 * pinch ..
 *
 * */


var 이미지1 = document.querySelectorAll('.slide-box img')[0];

var 매니저 = new Hammer.Manager(이미지1); // 어떤 요소에 터치기능개발할건지
매니저.add(new Hammer.Pan({ threshold: 0 }));  // threshold 는 이벤트가 발동되기까지의 한계점
// ^ 이미지1의 터치이벤트 담당 매니저

매니저.on('pan', function(e){
    //console.log('방금 이미지1을 pan했어요')
    console.log(e.deltaX)   // 이걸 검사하면 슬라이드 방향도 알겠네!

    // 만약에 이사람이 왼쪽으로 그림을 슬라이드 했을 때..
    if(e.deltaX < -1){
        $('.slide-container').css('transform','translateX('+e.deltaX + 'px)');
                                                        // ^ 슬라이드한 거리
        // 만약에 이사람이 마우스를 놓으면
        if(e.isFinal  && 지금보이는사진 == 1){  // e.isFinal 은 터치 끝났는지 알려줌
            // 두번째 사진으로 쑉 변해야함
            $('.slide-container').addClass('transforming');
            $('.slide-container').css('transform','translateX(-100vw)');
            // 0.5 초 후에 제거해주세요
            setTimeout(function(){
                $('.slide-container').removeClass('transforming');
            },500)
        }else if(e.isFinal && 지금보이는사진 == 2){
            // 두번째 사진으로 쑉 변해야함
            $('.slide-container').addClass('transforming');
            $('.slide-container').css('transform','translateX(-200vw)');
            // 0.5 초 후에 제거해주세요
            setTimeout(function(){
                $('.slide-container').removeClass('transforming');
            },500)
        }
    }
})
