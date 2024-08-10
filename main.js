//베이스 사운드 함수
export function playSound(name,vol,loop = false) {
  const audio = new Audio('./'+name);
  audio.volume = vol;
  audio.loop = loop;
  audio.play();
  return audio;
}
playSound("Destroyed World.mp3",1);