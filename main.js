import $ from 'jquery'
import {IROHATEXT1,SELECTTEX,GOODENDING,NORMALENDING} from "./irohatext"

//선택지
let choicecheck;      //선택지 골랐는지 확인
let choiceevent;      //어떤 선택지사항인지
let choicenow=0;      //어떤 선택지고름?
let choicesuccess           //선택지 성공여부

let Conversationtext  // 현재 나온 타이핑
let currentCharIndex  // 현재 타이핑 위치
let typingSpeed = 60; // 타이핑 속도 (밀리초)
let skiptext=false

let i = 0; //대화
let j = 0; //선택지
let point = 100; //호감도
let k = 0;


const $conversation = $(".conversation");

function typeCharacter() {
  if (currentCharIndex < Conversationtext.length) {
    $conversation.text($conversation.text() + Conversationtext.charAt(currentCharIndex));
    currentCharIndex++;
    setTimeout(typeCharacter, typingSpeed);
  } 
  else {
    $conversation.text(Conversationtext); // 타이핑이 끝나면 전체 텍스트 표시
  }
}

//텍스트 출력 초기화시키는곳
function PrintText(text){
  $conversation.text('');
  currentCharIndex=0;
  Conversationtext=text
  typeCharacter();
}

//베이스 사운드 함수
export function playSound(name,vol,loop = false) {
  const audio = new Audio('./'+name);
  audio.volume = vol;
  audio.loop = loop;
  audio.play();
  return audio;
}
const PS = playSound("backsound.mp3",0.5);
const PS2 = playSound("inclass.mp3",0.5);
const datesound = playSound("date.mp3",0.5);
const dinersound = playSound("diner.mp3",0.5);
const gamesound = playSound("gamecenter.mp3",0.5);
const moviesound = playSound("cinema.mp3",0.5);
PS2.pause();
datesound.pause();
dinersound.pause();
gamesound.pause();
moviesound.pause();

const onsound = new Audio('./clicksound.mp3');

function on(){
  onsound.play();
  $('.gamebox').show();
  $('.middle').hide();
  PS.pause();
  PS2.play();
  PrintText(IROHATEXT1[i]["TEXT1"]);
}

$(".gamebox").on('click', function() {
  if (IROHATEXT1[i]["end"] == "0") {
    i++;
    PrintText(IROHATEXT1[i]["TEXT1"]);
    if (IROHATEXT1[i]["select"] == true){
      $('.wall').show();
      $('.selectbox1').show();
      $('.selectbox1').text(SELECTTEX[j]["select1"]);
      $('.selectbox2').show();
      $('.selectbox2').text(SELECTTEX[j]["select2"]);
      j++;
    }
  }

  if (IROHATEXT1[i]["end"] == "1")
    {
      if (point <= 150) {
        PrintText(NORMALENDING[k]["normaltext"]);
        k++;
      }
      else if (point > 150) {
        PrintText(GOODENDING[k]["goodtext"]);
        k++;
      }
    }
});

$('.selectbox1').on('click', function() {
  onsound.play();
  point = point + 10;
  $('.like').text(point);
  const laughsound = new Audio('./laugh.mp3');
  laughsound.play();
  $('.selectbox1').hide();
  $('.selectbox2').hide();
  $('.wall').hide();
});

$('.selectbox2').on('click', function() {
  onsound.play();
  point = point - 10;
  $('.like').text(point);
  $('.selectbox1').hide();
  $('.selectbox2').hide();
  $('.wall').hide();
});

$('.gamebox').on('click',function() {
  if (IROHATEXT1[i]["chacter"] == "1") {
    PS2.pause();
    datesound.play();
    $('.gamebox').css('background-image',"url('./datesite.png')")
    $('.ch').attr('src','./ch2.png');
  }
  if (IROHATEXT1[i]["chacter"] == "2") {
    datesound.pause();
    dinersound.play();
    $('.gamebox').css('background-image',"url('./dinersite.png')")
  }
  if (IROHATEXT1[i]["chacter"] == "3") {
    dinersound.pause();
    gamesound.play();
    $('.gamebox').css('background-image',"url('./gamesite.png')")
  }
  if (IROHATEXT1[i]["chacter"] == "4") {
    gamesound.pause();
    moviesound.play();
    $('.gamebox').css('background-image',"url('./moviesite.png')")
  }
  if (IROHATEXT1[i]["chacter"] == "5") {
    moviesound.pause();
    PS2.play();
    $('.gamebox').css('background-image',"url('./classroom.jpg')")
    $('.ch').attr('src','./ch1.png');
  }
});





$('.gamebox').hide();

$('.btn').on('click', function() {on()});

$('.ch').attr('src','./ch1.png');

$('.like').text(point);

$('.selectbox1').hide();

$('.selectbox2').hide();

$('.wall').hide();

// 이미지 변경 및 배경 사진 변경