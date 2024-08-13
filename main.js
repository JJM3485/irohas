import $ from 'jquery'





//베이스 사운드 함수
export function playSound(name,vol,loop = false) {
  const audio = new Audio('./'+name);
  audio.volume = vol;
  audio.loop = loop;
  audio.play();
  return audio;
}
//playSound("backsound.mp3",0.5);


function on(){
  const onsound = new Audio('./clicksound.mp3');
  onsound.play();
  $('.gamebox').show();
  $('.middle').hide();
}

function likepoint(){
  var point = 100;
  $('.like').text(point);
}



$('.gamebox').hide();

$('.btn').on('click', function() {on()});

$('.ch').attr('src','./ch1.png');

likepoint();