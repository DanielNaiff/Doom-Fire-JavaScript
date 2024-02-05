const firePixelsArray = [];
let fireWidth = 60;
let fireHeight = 40;
let debug = false;
const fireColorsPalette = [
  [
    { r: 7, g: 7, b: 7 },
    { r: 31, g: 7, b: 7 },
    { r: 47, g: 15, b: 7 },
    { r: 71, g: 15, b: 7 },
    { r: 87, g: 23, b: 7 },
    { r: 103, g: 31, b: 7 },
    { r: 119, g: 31, b: 7 },
    { r: 143, g: 39, b: 7 },
    { r: 159, g: 47, b: 7 },
    { r: 175, g: 63, b: 7 },
    { r: 191, g: 71, b: 7 },
    { r: 199, g: 71, b: 7 },
    { r: 223, g: 79, b: 7 },
    { r: 223, g: 87, b: 7 },
    { r: 223, g: 87, b: 7 },
    { r: 215, g: 95, b: 7 },
    { r: 215, g: 95, b: 7 },
    { r: 215, g: 103, b: 15 },
    { r: 207, g: 111, b: 15 },
    { r: 207, g: 119, b: 15 },
    { r: 207, g: 127, b: 15 },
    { r: 207, g: 135, b: 23 },
    { r: 199, g: 135, b: 23 },
    { r: 199, g: 143, b: 23 },
    { r: 199, g: 151, b: 31 },
    { r: 191, g: 159, b: 31 },
    { r: 191, g: 159, b: 31 },
    { r: 191, g: 167, b: 39 },
    { r: 191, g: 167, b: 39 },
    { r: 191, g: 175, b: 47 },
    { r: 183, g: 175, b: 47 },
    { r: 183, g: 183, b: 47 },
    { r: 183, g: 183, b: 55 },
    { r: 207, g: 207, b: 111 },
    { r: 223, g: 223, b: 159 },
    { r: 239, g: 239, b: 199 },
    { r: 255, g: 255, b: 255 },
  ],
  //Azul
  [
    { r: 7, g: 7, b: 7 },
    { r: 15, g: 15, b: 31 },
    { r: 23, g: 23, b: 47 },
    { r: 31, g: 31, b: 71 },
    { r: 39, g: 39, b: 87 },
    { r: 47, g: 47, b: 103 },
    { r: 55, g: 55, b: 119 },
    { r: 63, g: 63, b: 143 },
    { r: 71, g: 71, b: 159 },
    { r: 87, g: 87, b: 175 },
    { r: 95, g: 95, b: 191 },
    { r: 103, g: 103, b: 207 },
    { r: 111, g: 111, b: 223 },
    { r: 119, g: 119, b: 239 },
    { r: 127, g: 127, b: 255 },
    { r: 135, g: 135, b: 255 },
    { r: 143, g: 143, b: 255 },
    { r: 151, g: 151, b: 255 },
    { r: 159, g: 159, b: 255 },
    { r: 167, g: 167, b: 255 },
    { r: 175, g: 175, b: 255 },
    { r: 183, g: 183, b: 255 },
    { r: 191, g: 191, b: 255 },
    { r: 199, g: 199, b: 255 },
    { r: 207, g: 207, b: 255 },
    { r: 215, g: 215, b: 255 },
    { r: 223, g: 223, b: 255 },
    { r: 231, g: 231, b: 255 },
    { r: 239, g: 239, b: 255 },
    { r: 247, g: 247, b: 255 },
    { r: 255, g: 255, b: 255 },
    { r: 255, g: 255, b: 255 },
    { r: 255, g: 255, b: 255 },
    { r: 255, g: 255, b: 255 },
    { r: 255, g: 255, b: 255 },
    { r: 255, g: 255, b: 255 },
    { r: 255, g: 255, b: 255 },
    { r: 255, g: 255, b: 255 },
  ],
  //verde
  [
    { r: 7, g: 31, b: 7 },
    { r: 7, g: 47, b: 7 },
    { r: 7, g: 63, b: 7 },
    { r: 7, g: 79, b: 7 },
    { r: 7, g: 95, b: 7 },
    { r: 7, g: 111, b: 7 },
    { r: 7, g: 127, b: 7 },
    { r: 7, g: 143, b: 7 },
    { r: 7, g: 159, b: 7 },
    { r: 7, g: 175, b: 7 },
    { r: 7, g: 191, b: 7 },
    { r: 7, g: 207, b: 7 },
    { r: 7, g: 223, b: 7 },
    { r: 7, g: 239, b: 7 },
    { r: 7, g: 255, b: 7 },
    { r: 23, g: 255, b: 23 },
    { r: 39, g: 255, b: 39 },
    { r: 55, g: 255, b: 55 },
    { r: 71, g: 255, b: 71 },
    { r: 87, g: 255, b: 87 },
    { r: 103, g: 255, b: 103 },
    { r: 119, g: 255, b: 119 },
    { r: 135, g: 255, b: 135 },
    { r: 151, g: 255, b: 151 },
    { r: 167, g: 255, b: 167 },
    { r: 183, g: 255, b: 183 },
    { r: 199, g: 255, b: 199 },
    { r: 215, g: 255, b: 215 },
    { r: 231, g: 255, b: 231 },
    { r: 247, g: 255, b: 247 },
    { r: 255, g: 255, b: 255 },
    { r: 255, g: 255, b: 255 },
    { r: 255, g: 255, b: 255 },
    { r: 255, g: 255, b: 255 },
    { r: 255, g: 255, b: 255 },
    { r: 255, g: 255, b: 255 },
    { r: 255, g: 255, b: 255 },
    { r: 255, g: 255, b: 255 },
    { r: 255, g: 255, b: 255 },
    { r: 255, g: 255, b: 255 },
    { r: 255, g: 255, b: 255 },
    { r: 255, g: 255, b: 255 },
    { r: 255, g: 255, b: 255 },
    { r: 255, g: 255, b: 255 },
  ],
];

function start() {
  createFireDataStructure();
  createFireSource();

  setInterval(calculateFirePropagation, 50);
}

function createFireDataStructure() {
  const numberOfPixels = fireWidth * fireHeight;

  for (let i = 0; i < numberOfPixels; i++) {
    firePixelsArray[i] = 0;
  }
}

function calculateFirePropagation() {
  for (let column = 0; column < fireWidth; column++) {
    for (let row = 0; row < fireHeight; row++) {
      const pixelIndex = column + fireWidth * row;

      updateFireIntensityPerPixel(pixelIndex);
    }
  }

  renderFire();
}

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', event => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

function updateFireIntensityPerPixel(currentPixelIndex) {
  const belowPixelIndex = currentPixelIndex + fireWidth;

  // below pixel index overflows canvas
  if (belowPixelIndex >= fireWidth * fireHeight) {
    return;
  }

  const decay = Math.floor(Math.random() * 3);
  const belowPixelFireIntensity = firePixelsArray[belowPixelIndex];
  const newFireIntensity =
    belowPixelFireIntensity - decay >= 0 ? belowPixelFireIntensity - decay : 0;
  if (mouseX > window.innerWidth / 2) {
    firePixelsArray[currentPixelIndex + decay] = newFireIntensity;
  } else if (mouseY < window.innerWidth / 2) {
    firePixelsArray[currentPixelIndex - decay] = newFireIntensity;
  } else {
    firePixelsArray[currentPixelIndex] = newFireIntensity;
  }
}

// Adicione uma variável para armazenar a paleta de cores escolhida pelo usuário
let userSelectedPaletteIndex = 0; // Índice da paleta padrão (vermelha)

// Atualize a função renderFire para usar a paleta de cores escolhida pelo usuário
function renderFire() {
  let html = '<table cellpadding=0 cellspacing=0>';

  const userSelectedPalette = fireColorsPalette[userSelectedPaletteIndex];

  for (let row = 0; row < fireHeight; row++) {
    html += '<tr>';

    for (let column = 0; column < fireWidth; column++) {
      const pixelIndex = column + fireWidth * row;
      const fireIntensity = firePixelsArray[pixelIndex];

      // Use a paleta de cores escolhida pelo usuário
      const color = userSelectedPalette[fireIntensity];

      if (debug === true) {
        html += '<td>';
        html += `<div class="pixel-index">${pixelIndex}</div>`;
        html += `<div style="color: rgb(${color.r},${color.g},${color.b})">${fireIntensity}</div>`;
        html += '</td>';
      } else {
        html += `<td class="pixel" style="background-color: rgb(${color.r},${color.g},${color.b})">`;
        html += '</td>';
      }
    }

    html += '</tr>';
  }

  html += '</table>';

  document.querySelector('#fireCanvas').innerHTML = html;
}

// Adicione um listener para detectar mudanças no input de paleta de cores
document
  .getElementById('colorPalette')
  .addEventListener('change', function (event) {
    const selectedPalette = event.target.value;

    // Atualize o índice da paleta de cores escolhida pelo usuário
    if (selectedPalette === 'red') {
      userSelectedPaletteIndex = 0; // Vermelho
    } else if (selectedPalette === 'blue') {
      userSelectedPaletteIndex = 1; // Azul
    } else if (selectedPalette === 'green') {
      userSelectedPaletteIndex = 2; // Verde
    }

    renderFire(); // Re-renderiza o fogo quando a paleta é alterada
  });

function createFireSource() {
  for (let column = 0; column <= fireWidth; column++) {
    const overflowPixelIndex = fireWidth * fireHeight;
    const pixelIndex = overflowPixelIndex - fireWidth + column;

    firePixelsArray[pixelIndex] = 36;
  }
}

function destroyFireSource() {
  for (let column = 0; column <= fireWidth; column++) {
    const overflowPixelIndex = fireWidth * fireHeight;
    const pixelIndex = overflowPixelIndex - fireWidth + column;

    firePixelsArray[pixelIndex] = 0;
  }
}

function increaseFireSource() {
  for (let column = 0; column <= fireWidth; column++) {
    const overflowPixelIndex = fireWidth * fireHeight;
    const pixelIndex = overflowPixelIndex - fireWidth + column;
    const currentFireIntensity = firePixelsArray[pixelIndex];

    if (currentFireIntensity < 36) {
      const increase = Math.floor(Math.random() * 14);
      const newFireIntensity =
        currentFireIntensity + increase >= 36
          ? 36
          : currentFireIntensity + increase;

      firePixelsArray[pixelIndex] = newFireIntensity;
    }
  }
}

function decreaseFireSource() {
  for (let column = 0; column <= fireWidth; column++) {
    const overflowPixelIndex = fireWidth * fireHeight;
    const pixelIndex = overflowPixelIndex - fireWidth + column;
    const currentFireIntensity = firePixelsArray[pixelIndex];

    if (currentFireIntensity > 0) {
      const decay = Math.floor(Math.random() * 14);
      const newFireIntensity =
        currentFireIntensity - decay >= 0 ? currentFireIntensity - decay : 0;

      firePixelsArray[pixelIndex] = newFireIntensity;
    }
  }
}

function toggleDebugMode() {
  if (debug === false) {
    fireWidth = 25;
    fireHeight = 17;
    debug = true;
  } else {
    fireWidth = 60;
    fireHeight = 40;
    debug = false;
  }

  createFireDataStructure();
  createFireSource();
}

start();
