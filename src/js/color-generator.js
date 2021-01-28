import { colors } from './colors';

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtnEl = document.querySelector('button[data-action="start"]');
const stopBtnEl = document.querySelector('button[data-action="stop"]');
const bodyEl = document.body;

startBtnEl.addEventListener('click', colorSwitcher);
stopBtnEl.addEventListener('click', colorSwitcherOff);

let switcherId = null;

function colorSwitcher() {
  if (switcherId !== null) {
    return;
  } else colorSwitcherOn();
}

function colorUpdater() {
  bodyEl.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

function colorSwitcherOn() {
  switcherId = setInterval(() => {
    colorUpdater();
  }, 1000);
}

function colorSwitcherOff() {
  clearInterval(switcherId);
  switcherId = null;
}
