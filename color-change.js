const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyRef = document.querySelector('body');
const startRef = document.querySelector('[data-action="start"]');
const stopRef = document.querySelector('[data-action="stop"]');

const colorChanger = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.intervalId = setInterval(() => {
      ColorChange();
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

startRef.addEventListener('click', colorChanger.start.bind(colorChanger));
stopRef.addEventListener('click', colorChanger.stop.bind(colorChanger));

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function ColorChange() {
  return (bodyRef.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)]);
}
