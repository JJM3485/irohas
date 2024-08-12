import $ from 'jquery'

//베이스 사운드 함수
export function playSound(name,vol,loop = false) {
  const audio = new Audio('./'+name);
  audio.volume = vol;
  audio.loop = loop;
  audio.play();
  return audio;
}
playSound("backsound.mp3",0.5);


function on(){
  const onsound = new Audio('./clicksound.mp3');
  onsound.play();
  alert("하지마루요"); 
}


$('.btn').on('click', function() {on()});

