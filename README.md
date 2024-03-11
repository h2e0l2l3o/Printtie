# About the Website, Prittie
---
This is a photo printing proxy service website where users can submit proxy applications and check the status of their orders,
as well as request delivery for stored items.

It is primarily built using HTML, CSS, and JavaScript. Additionally, Google Apps Script is used to manage and 
query customer input data in Excel format. Furthermore, KakaoTalk, a widely used social media platform in Korea similar to Snapchat,
has been integrated to facilitate customer consultations through this platform.

## First Page (Homepage)
---
<img width="736" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/3d711f72-0cf8-4271-bc11-33f11c4a9a8d">
Based on the designed wireframes from Axure which is a UX design tool, I made the homepage and added functions needed. 
Once the first button is clicked, it goes to the page where users can order photos
Once the second button is clicked, it goes to the page where users can request the delivery
Once the third button is clicked, it goes to the page where users can inquiry their stored or ordered items.
Once the fourth button is clickes, it goes to the Kakaotalk chat page for customer consultations.

## Revised Homepage
---
<img width="149" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/a115b0b3-b467-4ec8-acc3-ada290133a16">
<img width="142" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/2f54b0a3-f3e7-4dc1-a59e-a555c7075ba0">
This is the revised page.

## The Proxy Application Page (the first tab page)
---
<img width="101" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/82a80d30-47b4-4c55-acc7-36628b20a40f">
<img width="80" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/1ba8550a-b158-4f3f-a51e-8e9c6427e0b0">
---
### Options that customers can choose
There are 4 options that users can choose. Those are printing methods. Four of them are not available now, so I made those elements disabled so that users can choose the only avialable option.
<img width="273" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/6e1a2e5b-40bb-4128-abeb-40d8806a15c5">
---
### FAQ(Frequently asked questions)s Section
<img width="475" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/7f6eb42e-a9da-4204-ae44-a2da21d6f780">
The section has been created in a dropdown format to display frequently asked questions (FAQs) and their corresponding answers for customers.
---


## The Delivery Application Page (the second tab page)
---
<img width="80" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/35f90c36-af09-4f59-8519-3d47ee2c23a2">
---
### FAQ(Frequently asked questions)s Section
<img width="491" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/4f12e680-28cd-42cf-83bd-b1cc60c746e0">
The section has been created in a dropdown format to display frequently asked questions (FAQs) and their corresponding answers for customers.

## Designed Logic for Getting orders Based on available time
---
<img width="776" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/02bd78b9-07c2-4d5b-89c6-56f23a07e330">
<img width="380" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/38d6ccd2-b049-408f-8d15-7f3a28ab75ea">
<img width="129" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/44db6d21-ce47-4b34-945e-01f6456c2a65">
<img width="127" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/c8a45cd6-fda0-4469-a347-ac13fa388352">


I have implemented a logic based on time to enable customers to place orders according to designated time slots. 
The coding is structured to determine the available and unavailable time slots for order placement.
```
/*시간대 별, 요일 별 표시*(Korean time:한국시간 기준)*/

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/*첫번째 조건: COMM.SWITCH(On(1)/OFF(0)) 
--> 여기가 관리자가 직접 적용할 수 있는 곳!!!!!!!!!*/
var comm_switch = "0";
/*default값은 1(on)* --> 대행신청1서::휴무 상태 띄우고 싶으면 "0"으로 바꾸세요!!!!!!!*/

var comm_switch2 = "1"; //default값은 1(on)* --> 배송신청서::다음 영업일 상태 띄우고 싶으면 "0"으로 바꾸세요!!!!!!!*/
/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

/*두번째 조건: weekday(MON(1), TUE(2), WED(3), THR(4), FRI(5), SAT(6), SUN(0))*/
var weekday = 1; /*지금은 MON인 상태*/

/*세번째 조건: 1 작업 가능 시간: time(start_time1(000000)~end_time1(095959), 
2 작업 가능 시간: start_time2(100000)~end_time2(155959),
3 작업 가능 시간: start_time3(160000)~end_time3(235959))*/

var first_start_time1 = "100000"; //파트 1 시작 시간
var first_end_time1 = "130000"; // 파트 1 종류 시간

var first_start_time2 = "160000"; //파트 2 시작 시간
var first_end_time2 = "190000"; // 파트 2 종류 시간

var part_time = "1"; //파트 시간(1~3)에 따라 (파트 1에 해당 -> 1, 2에 해당 ->2, 3에 해당 ->3)

var start_time1 = "000000"; //파트 1 시작 시간
var end_time1 = "100000"; // 파트 1 종류 시간

var start_time2 = "100000"; //파트 2 시작 시간
var end_time2 = "160000"; // 파트 2 종류 시간
// var end_time2 = "163200"; //테스트

var start_time3 = "160000"; //파트 3 시작 시간
// var start_time3 = "163200"; //테스트
var end_time3 = "240000"; //파트 3 종류 시간

var part_time2 = "1"; //파트 시간(1~2)에 따라 (파트 1에 해당 -> 1, 2에 해당 ->2)

/*시간 각각 HH:MM:SS 형식으로 바꾸는 함수*/
function pluszero(time) {
  var time = time.toString(); // 시간을 숫자에서 문자로 바꿈
  if (time.length < 2) {
    //2자리 보다 작다면
    time = "0" + time; //숫자앞 0을 붙여줌
    return time; //값을 내보냄
  } else {
    return time; //2자리라면 값을 내보냄
  }
}

const con1_btn1 = document.getElementById("box1");
const con1_btn2 = document.getElementById("box2");
const con1_btn3 = document.getElementById("box3");

const con1_arrow1 = document.getElementById("arrow1");
const con1_arrow2 = document.getElementById("arrow2");
const con1_arrow3 = document.getElementById("arrow3");

const con2_btn1 = document.getElementById("con2_box1");
const con2_btn2 = document.getElementById("con2_box2");
const con2_btn3 = document.getElementById("con2_box3");

const con2_arrow1 = document.getElementById("con2_arrow1");
const con2_arrow2 = document.getElementById("con2_arrow2");
const con2_arrow3 = document.getElementById("con2_arrow3");

function getnow() {
  // 1. 현재 시간(Locale)
  const curr = new Date();

  // 2. UTC 시간 계산
  const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;

  // 3. UTC to KST (UTC + 9시간)
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const kr_curr = new Date(utc + KR_TIME_DIFF);

  var nowHour = kr_curr.getHours(); // 시
  var nowMins = kr_curr.getMinutes(); // 분
  var nowSec = kr_curr.getSeconds(); //초
  weekday = kr_curr.getDay(); //요일 (0(일)~6(토) 중 하나)

  nowHour = pluszero(nowHour);
  nowMins = pluszero(nowMins);
  nowSec = pluszero(nowSec);

  var nowtime = nowHour + nowMins + nowSec; // 시+분+초 (HHMMSS)

  //현재 nowtime이 어느 part_time에 속하는지 지정
  if (first_start_time1 <= nowtime && nowtime <= first_end_time1) {
    part_time = "1";
  } else if (first_start_time2 <= nowtime && nowtime <= first_end_time2) {
    part_time = "2";
  } else {
    part_time = "3";
  }

  /* 1차 주문 접수 활성화를 위한 조건문 */
  if (comm_switch == "1" && weekday != 2 && part_time == "1") {
    con1_btn1.disabled = false;
    con1_arrow1.style.display = "inline-block";
    con1_btn2.disabled = true;
    con1_arrow2.style.display = "none";
    con1_btn3.disabled = true;
    con1_arrow3.style.display = "none";
  }
  //2차 주문 접수 활성화 조건문
  else if (
    comm_switch == "1" &&
    weekday != 1 &&
    weekday != 2 &&
    part_time == "2"
  ) {
    con1_btn1.disabled = true;
    con1_arrow1.style.display = "none";
    con1_btn2.disabled = false;
    con1_arrow2.style.display = "inline-block";
    con1_btn3.disabled = true;
    con1_arrow3.style.display = "none";
  } else {
    //3차 주문 접수 활성화 조건문
    con1_btn1.disabled = true;
    con1_arrow1.style.display = "none";
    con1_btn2.disabled = true;
    con1_arrow2.style.display = "none";
    con1_btn3.disabled = false;
    con1_arrow3.style.display = "inline-block";
  }
}

function getdate() {
  // 1. 현재 시간(Locale)
  const curr = new Date();

  // 2. UTC 시간 계산
  const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;

  // 3. UTC to KST (UTC + 9시간)
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const kr_curr = new Date(utc + KR_TIME_DIFF);

  var nowHour = kr_curr.getHours(); // 시
  var nowMins = kr_curr.getMinutes(); // 분
  var nowSec = kr_curr.getSeconds(); //초
  weekday = kr_curr.getDay(); //요일 (0~6 중 하나)

  nowHour = pluszero(nowHour);
  nowMins = pluszero(nowMins);
  nowSec = pluszero(nowSec);

  var nowtime = nowHour + nowMins + nowSec; // 시+분+초 (HHMMSS)

  //현재 nowtime이 어느 part_time2에 속하는지 지정
  if (start_time1 <= nowtime && nowtime < end_time1) {
    part_time2 = "1";
  } else {
    part_time2 = "2";
  }

  /* 당일(오늘) 배송 */
  if (comm_switch2 == "1" && weekday != 2 && weekday != 6 && part_time2 == 1) {
    con2_btn1.disabled = false;
    con2_arrow1.style.display = "inline-block";
    con2_btn2.disabled = true;
    con2_arrow2.style.display = "none";
    con2_btn3.disabled = true;
    con2_arrow3.style.display = "none";
  }
  //익일(내일) 배송
  else if (
    (comm_switch2 == "1" &&
      weekday != 0 &&
      weekday != 1 &&
      weekday != 2 &&
      weekday != 5 &&
      weekday != 6 &&
      part_time2 == "2") ||
    (comm_switch2 == "1" &&
      weekday != 1 &&
      weekday != 3 &&
      weekday != 4 &&
      weekday != 5 &&
      weekday != 6)
  ) {
    con2_btn1.disabled = true;
    con2_arrow1.style.display = "none";
    con2_btn2.disabled = false;
    con2_arrow2.style.display = "inline-block";
    con2_btn3.disabled = true;
    con2_arrow3.style.display = "none";
  } else {
    //3차 주문 접수 활성화 조건문
    con2_btn1.disabled = true;
    con2_arrow1.style.display = "none";
    con2_btn2.disabled = true;
    con2_arrow2.style.display = "none";
    con2_btn3.disabled = false;
    con2_arrow3.style.display = "inline-block";
  }
}

//반복 실행시키는 함수를 이용해서 계속 정보 업데이트 하기 1000ms, 즉, 1초당 한번씩 실행 시키고 있음
function init() {
  setInterval(getnow, 1000);
  setInterval(getdate, 1000);
}

init();
```



