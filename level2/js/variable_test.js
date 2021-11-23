// Question1
var 예금액 = 60000;
var 미래예금액 = 0;

/**
 * 여기에 어떤 코드가 들어가야할까요?
 * 예시) 예금액이라는 변수에 60000을 집어넣으면 86400 이게 콘솔창에 출력되어야 합니다. (미래예금액)
 * */

if(예금액 >= 50000){
    미래예금액 = 예금액*1.2*1.2
}else{
    미래예금액 = 예금액*1.15*1.15
}
console.log(미래예금액);



// Question2
var 첫커피양 = 360;
var 마신커피 = 0;
var 첫리필 = Math.round(첫커피양 * 0.6666);
var 두번째리필 = Math.round(첫리필 * 0.6666);


/**
 * 여기 어떤 코드가 들어가면 될까요?
 * 예시) 첫커피양에 360을 집어넣으면 콘솔창에 마신커피를 출력했을 때 760이 출력되어야합니다. (360 + 240 + 160)
 * 팁) 새로운 변수를 만드는 것도 좋은 생각입니다.
 * 
 * 3분의 2를 소수점으로 변환, 뒷자리는 반올림으로 계산하여 변수로 저장하여 계산
 * 
 * */

마신커피 = 첫커피양 + 첫리필 + 두번째리필
console.log(마신커피);