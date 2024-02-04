const firePixelArray = [];
const fireWidth = 10;
const fireHeight = 10;

function start() {
  createDataStructure();
  renderFire();
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

function calculateFirePropagation() {}

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
