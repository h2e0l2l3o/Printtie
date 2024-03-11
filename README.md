# About the Website, Prittie

This is a photo printing proxy service website where users can submit proxy applications and check the status of their orders,
as well as request delivery for stored items.

It is primarily built using HTML, CSS, and JavaScript. Additionally, Google Apps Script is used to manage and 
query customer input data in Excel format. Furthermore, KakaoTalk, a widely used social media platform in Korea similar to Snapchat,
has been integrated to facilitate customer consultations through this platform.

## First Page (Homepage)

<img width="1000" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/3d711f72-0cf8-4271-bc11-33f11c4a9a8d">


Based on the designed wireframes from Axure which is a UX design tool, I made the homepage and added functions needed. 
Once the first button is clicked, it sends you to the page where users can order photos
Once the second button is clicked, it sends you to the page where users can request the delivery
Once the third button is clicked, it sends you to the page where users can inquiry their stored or ordered items.
Once the fourth button is clickes, it sends you to the Kakaotalk chat page for customer consultations.

## Revised Homepage

<img width="500" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/a115b0b3-b467-4ec8-acc3-ada290133a16">


<img width="500" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/2f54b0a3-f3e7-4dc1-a59e-a555c7075ba0">


This is the revised page.

## The Proxy Application Page (the first tab page)

<img width="500" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/82a80d30-47b4-4c55-acc7-36628b20a40f">


<img width="300" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/1ba8550a-b158-4f3f-a51e-8e9c6427e0b0">

### Options that customers can choose
There are 4 options that users can choose. Those are printing methods. Four of them are not available now, so I made those elements disabled so that users can choose the only avialable option.


<img width="500" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/6e1a2e5b-40bb-4128-abeb-40d8806a15c5">

### FAQ(Frequently asked questions)s Section
<img width="800" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/7f6eb42e-a9da-4204-ae44-a2da21d6f780">


The section has been created in a dropdown format to display frequently asked questions (FAQs) and their corresponding answers for customers.

### Next pages
Once you select an option on the drop-down menu, the application button is enabled and turns to red from grey. When the user clicks the button, it sends them to the order page.


## The Delivery Application Page (the second tab page)

<img width="500" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/35f90c36-af09-4f59-8519-3d47ee2c23a2">

### FAQ(Frequently asked questions)s Section
<img width="800" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/4f12e680-28cd-42cf-83bd-b1cc60c746e0">


The section has been created in a dropdown format to display frequently asked questions (FAQs) and their corresponding answers for customers.

### Next pages
<img width="289" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/957e1532-227d-4a52-98b1-0cee49edf7b6">


Once the user clicks the first button, it sends them to the delivery request page. And when the user clicks the second button, it sends them to the order history in page.

## Designed Logic for Getting orders Based on available time

<img width="1000" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/02bd78b9-07c2-4d5b-89c6-56f23a07e330">


<img width="500" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/38d6ccd2-b049-408f-8d15-7f3a28ab75ea">


<img width="400" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/44db6d21-ce47-4b34-945e-01f6456c2a65">


<img width="400" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/c8a45cd6-fda0-4469-a347-ac13fa388352">


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

## Order Page
This page is connected to the google spread sheet. So, once the customer orders the items, the customer's information and their unique order ID is stored on the google sheet. Also, The order button controls the availiabilty of placing orders based on the time that I set. So, if the customer tries to place an order after work hours or on holidays, then it doesn't send them to the order completion page and shows a pop up of the next available time that they can complete the order.  


<img width="329" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/a7cecc3a-739c-4b14-8f0e-5e720480c045">


### First Tab Page
<img width="300" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/0ae89919-1e50-4607-937d-fb4259df297c">
<img width="300" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/8873e5cf-6742-47b4-82ee-ccf6518dbfd8">

### Second Tab Page
<img width="300" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/3df0f5c8-6b15-4ffc-bd9d-6d3726a58a14">

### Third Tab Page
<img width="300" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/f4cdce88-3126-40f2-923d-fa34f4c82f59">

### Toggle Buttons
<img width="300" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/47badef6-e8f2-42ce-a7a3-14d99f4f5d24">


Through this toggle button, customers can place up to 10 orders. To initiate an order, toggle the button on, and once the required text fields inside are filled out according to the specified conditions, the order button will become active, allowing you to proceed with the order.

<img width="300" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/167bb8e1-53ae-4b5f-98fa-393833294b33">

Once the customer filled in the text fields with proper infromation, the order button is enabeld and turns to red, and it also shows the total cost of the items and the numbers of photos that the customer ordered.

## Delivery Request Page

<img width="300" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/f01fe836-cac7-4185-80de-6f88eaf5df15">

<img width="300" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/d737fa25-b18e-4848-ae8e-aa1555555844">

This is the delivery order page. Using the location API provided by Kakao, I enabled customers to input accurate delivery locations. Like other pages, I created a button to ensure that customers can only place a delivery order when they input accurate information.

<img width="351" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/2f6fb478-78a2-4c1f-b8a2-76b7ea334aa3">


### Based on the Order Information, Users Can Find the Cost of Delivery That They Should Pay for Delivery Service
<img width="800" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/229234f1-32ff-4b83-b0f3-20c7b9e51062">


Order information is stored in Google Spread Sheet and users can ask the information from the data sheet and get the data. 

```
      //구글 스크립트에 정보 요청
      function getData() {
        //A열 이름
        var getname = namefield.value;

        //B열 전화번호
        var getphone1 = "";
        var getphone2 = "";
        var getfinalphone = "";

        //C열 이메일
        var getemail = "";

        if (order1.checked) {
          getphone1 = phone2Input.value;
          getphone2 = phone3Input.value;

          getfinalphone = Number("10" + getphone1 + getphone2);
          // getfinalphone = 1066450232
        } else if (order2.checked) {
          getemail = emailfield.value;
        }

        google.script.run
          .withSuccessHandler(update_inquiry)
          .getDataFromSheet(getname, getfinalphone, getemail);
      }
```

## Photo Storage Page

Page where the ordered photos are stored before executing the delivery order. 

<img width="144" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/8a7dd5f8-8257-48fd-a292-9d2e2dd2cad2">

<img width="152" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/2dd280bc-3b69-47f4-80c7-481ca917229f">

With the customer's name, phone number, or email address, customers can search for the total cost of the items they ordered, the number of photos they have ordered so far, the limit days for storing the items, and the delivery cost.

<img width="145" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/075b293a-6746-4cad-92fe-31221ee73f58">

## Order History Page

Page where users can inquiry the order history.

<img width="300" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/b1222ef5-6a61-4c86-a540-b25258721c93">

<img width="400" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/72982d22-afbd-4565-9ae8-c5bb1af5bcf2">

<img width="400" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/c4eec7f8-652a-4082-8cd9-69a590e494c8">


## Data Flow

<img width="500" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/2ce9dbd0-ef81-410b-9edf-9ff978f505b3">

<img width="194" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/ddfa885e-310a-4225-b759-4cc04fffd269">

<img width="403" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/da28ae41-3887-4546-88e6-9902320595c7">

<img width="236" alt="image" src="https://github.com/h2e0l2l3o/Printtie/assets/122464604/f5df8a15-6a29-4b17-8c85-3a836c4b5382">















