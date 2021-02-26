const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const bodyRef = document.querySelector("body");
const startRef = document.querySelector('[data-action="start"]');
const stopRef = document.querySelector('[data-action="stop"]');

let intervalId = null;

startRef.addEventListener("click", startColorChange);

stopRef.addEventListener("click", stopColorChange);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function startColorChange() {
  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
  startRef.removeEventListener("click", startColorChange);
}

function stopColorChange() {
  clearInterval(intervalId);
  startRef.addEventListener("click", startColorChange);
}
