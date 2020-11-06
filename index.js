const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let intervalID = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click', clickStartBtn);
function clickStartBtn() {
  startBtn.disabled = true;
  intervalID = setInterval(() => {
    document.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
};

stopBtn.addEventListener('click', clickStopBtn);
function clickStopBtn() {
  startBtn.disabled = false;
  clearInterval(intervalID);
  };
