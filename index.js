const startBtn = document.querySelector('[data-action="start"]');
let timerId = null;
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorsOnScreen = colors[randomIntegerFromInterval(0, colors.length - 1)];



startBtn.addEventListener('click', startChangeColor);

function startChangeColor() {
    timerId = 
    document.body.style.background = randomIntegerFromInterval
};
