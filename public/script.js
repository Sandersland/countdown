const zeroPad = (num) => {
  return num.toString().padStart(2, '0');
}

const countdown = (timer, target) => {
  const now = new Date();

  const difference = target.getTime() - now.getTime();
  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(difference / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(difference / (1000 * 60)) % 60;
    const seconds = Math.floor(difference / (1000)) % 60;
    timer.innerText = [days, hours, minutes, seconds].map(zeroPad).join(":");
    return;
  }
  timer.innerText = "00:00:00:00";
}

const createHeart = () => {
  const duration = Math.random() * 5 + 5;
  const size = Math.random() * 50;
  const heartContainer = document.createElement('div');
  heartContainer.classList.add("heart-container");
  heartContainer.style.left = (Math.random() * window.innerWidth) - 1 + 'px';
  heartContainer.style.animationDuration = duration + 's';
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';
  heartContainer.appendChild(heart);
  document.body.appendChild(heartContainer);

  setTimeout(() => {
    heartContainer.remove();
  }, (duration + 1) * 1000);
}

window.addEventListener('DOMContentLoaded', () => {
  const timer = document.getElementById("timer");
  const target = new Date('4/16/2021');

  countdown(timer, target);

  setInterval(() => {
    countdown(timer, target);
  }, 1000);

  setInterval(createHeart, 200);
});
