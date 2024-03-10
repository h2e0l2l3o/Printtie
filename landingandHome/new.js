const tab1 = document.getElementById("tab1");
const content1 = document.getElementById("content1");
const tab2 = document.getElementById("tab2");
const content2 = document.getElementById("content2");

window.onload = function () {
  var tabHash = window.location.hash;
  if (tabHash === "#tab2") {
    showTab();
  }
};

function showTab() {
  tab2.checked = true;
  tab1.checked = false;
  content1.style.display = "none";
  content2.style.display = "inline-flex";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

tab1.addEventListener("change", function () {
  if (tab1.checked) {
    content2.style.display = "none";
    content1.style.display = "inline-flex";
    //맨 위로 스크롤 이동
    // content1.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    //   inline: "nearest",
    // });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

tab2.addEventListener("change", function () {
  if (tab2.checked) {
    content1.style.display = "none";
    content2.style.display = "inline-flex";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

var dropdown = document.querySelector(".dropdown");
var dropdownList = document.querySelector(".dropdown-list");

const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const application_btn1 = document.getElementById("proxy_application");

dropdownList.style.display = "none";

dropdown.onclick = function openList() {
  dropdown.classList.toggle("active");
  if (dropdownList.style.display === "none") {
    dropdownList.style.display = "inline-block";
  } else {
    dropdownList.style.display = "none";
  }
  dropdownList.classList.toggle("opened");
};

option1.onclick = function select1() {
  dropdown.textContent = option1.textContent;
  dropdown.style.color = "#aaaaaa";
  option2.style.backgroundColor = "#fff";
  option2.style.color = "#000000";
  option1.style.backgroundColor = "rgba(253, 236, 237, 1)";
  option1.style.color = "#e7404a";
  application_btn1.disabled = true;
  dropdown.classList.toggle("active");
  dropdownList.style.display = "none";
  dropdownList.classList.toggle("opened");
};

option2.onclick = function select2() {
  dropdown.textContent = option2.textContent;
  dropdown.style.color = "black";
  option1.style.backgroundColor = "#fff";
  option1.style.color = "#aaaaaa";
  option2.style.backgroundColor = "rgba(253, 236, 237, 1)";
  option2.style.color = "#e7404a";
  application_btn1.disabled = false;
  dropdown.classList.toggle("active");
  dropdownList.style.display = "none";
  dropdownList.classList.toggle("opened");
};

var faqQuestions = document.getElementsByClassName("faq-question");
var activeQuestion = null;

for (var i = 0; i < faqQuestions.length; i++) {
  faqQuestions[i].addEventListener("click", function () {
    // 현재 클릭된 질문이 이미 활성화된 상태인 경우
    if (this === activeQuestion) {
      this.classList.remove("active");
      var answer = this.nextElementSibling;
      var arrow = this.querySelector(".xi-caret-up-min");
      answer.style.display = "none";
      arrow.classList.remove("up");
      this.style.fontWeight = "500";
      activeQuestion = null;
    }
    // 다른 질문이 이미 활성화된 상태인 경우
    else if (activeQuestion !== null) {
      activeQuestion.classList.remove("active");
      var activeAnswer = activeQuestion.nextElementSibling;
      var activeArrow = activeQuestion.querySelector(".xi-caret-up-min");
      activeAnswer.style.display = "none";
      activeArrow.classList.remove("up");
      activeQuestion.style.fontWeight = "500";

      this.classList.add("active");
      var newAnswer = this.nextElementSibling;
      var newArrow = this.querySelector(".xi-caret-up-min");
      newAnswer.style.display = "inline-flex";
      newArrow.classList.add("up");
      this.style.fontWeight = "700";

      activeQuestion = this;
    }
    // 새로운 질문을 선택한 경우
    else {
      this.classList.add("active");
      var answer = this.nextElementSibling;
      var arrow = this.querySelector(".xi-caret-up-min");
      answer.style.display = "inline-flex";
      arrow.classList.add("up");
      this.style.fontWeight = "700";

      activeQuestion = this;
    }
  });
}

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
