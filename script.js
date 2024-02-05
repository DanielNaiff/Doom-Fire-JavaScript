import { fireColorsPalette } from './script.js';
const firePixelArray = [];
const fireWidth = 12;
const fireHeight = 12;

function start() {
  createDataStructure();
  renderFire();
  setInterval(calculateFirePropagation, 1000);
}

function createDataStructure() {
  for (let i = 0; i < fireWidth; i++) {
    firePixelArray[i] = [];
    for (let j = 0; j < fireHeight; j++) {
      firePixelArray[i][j] = 0;
    }
    firePixelArray[i][fireHeight - 1] = 36;
  }
}

function calculateFirePropagation() {
  for (let i = 0; i < fireWidth; i++) {
    for (let j = 0; j < fireHeight; j++) {
      updateFirePerPixel(i, j);
    }
  }
  renderFire();
}

function updateFirePerPixel(i, j) {
  if (j === 0 || j === 1) {
    return;
  } else {
    const decay = Math.floor(Math.random() * 3);
    const newFireIntensity =
      firePixelArray[i][fireHeight - (j - 1)] - decay >= 0
        ? firePixelArray[i][fireHeight - (j - 1)] - decay
        : 0;
    firePixelArray[i][fireHeight - j] = newFireIntensity;
  }
}

function renderFire() {
  let html = '<table cellpadding=0 cellspacing=0>';

  for (let j = 0; j < fireHeight; j++) {
    html += '<tr>';
    for (let i = 0; i < fireWidth; i++) {
      html += '<td>';
      html += firePixelArray[i][j];
      html += '</td>';
    }
    html += '</tr>';
  }

  html += '</table>';

  document.getElementById('fireCanvas').innerHTML = html;
}

start();
