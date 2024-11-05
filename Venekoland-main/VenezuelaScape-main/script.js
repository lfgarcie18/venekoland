// Selecciona el botón de jugar
const playButton = document.getElementById('play-button');

// Agrega un evento de clic al botón de jugar
playButton.addEventListener('click', () => {
  // Oculta el menú principal
  document.querySelector('nav').style.display = 'none';

  // Muestra la selección de niveles
  const levelSelect = document.createElement('div');
  levelSelect.id = 'level-select';

  // Agrega contenido a la selección de niveles
  levelSelect.innerHTML = `
    <h2>Selecciona un nivel</h2>
    <ul>
      <li><button id="level-1-button">Nivel 1</button></li>
    </ul>
  `;

  // Agrega la selección de niveles al elemento main
  const main = document.querySelector('main');
  main.appendChild(levelSelect);

// Selecciona el botón de nivel 1
const level1Button = document.getElementById('level-1-button');

// Agrega un evento de clic al botón de nivel 1
level1Button.addEventListener('click', () => {
  // Redirige a la página level1.html
  window.location.href = 'levels/level1/level1.html';
});

  const level2Button = document.getElementById('level-2-button');
  level2Button.addEventListener('click', () => {
    // Abre el nivel 2
    openLevel2();
  });

  const level3Button = document.getElementById('level-3-button');
  level3Button.addEventListener('click', () => {
    // Abre el nivel 3
    openLevel3();
  });
});

// Funciones para abrir los niveles
function openLevel1() {
  // Crea un nuevo elemento div para el nivel 1
  const level1 = document.createElement('div');
  level1.id = 'level-1';

  // Agrega contenido al nivel 1
  level1.innerHTML = `
    <h2>Nivel 1</h2>
    <p>Bienvenido al nivel 1.</p>
  `;

  // Agrega el nivel 1 al elemento main
  const main = document.querySelector('main');
  main.appendChild(level1);
}

function openLevel2() {
  // Crea un nuevo elemento div para el nivel 2
  const level2 = document.createElement('div');
  level2.id = 'level-2';

  // Agrega contenido al nivel 2
  level2.innerHTML = `
    <h2>Nivel 2</h2>
    <p>Bienvenido al nivel 2.</p>
  `;

  // Agrega el nivel 2 al elemento main
  const main = document.querySelector('main');
  main.appendChild(level2);
}

function openLevel3() {
  // Crea un nuevo elemento div para el nivel 3
  const level3 = document.createElement('div');
  level3.id = 'level-3';

  // Agrega contenido al nivel 3
  level3.innerHTML = `
    <h2>Nivel 3</h2>
    <p>Bienvenido al nivel 3.</p>
  `;

  // Agrega el nivel 3 al elemento main
  const main = document.querySelector('main');
  main.appendChild(level3);
}

document.getElementById('options-button').addEventListener('click', function() {
    // Código para mostrar las opciones del juego
    console.log('Opciones del juego');
});

document.getElementById('credits-button').addEventListener('click', function() {
    // Código para mostrar los créditos del juego
    console.log('Créditos del juego');
});

particlesJS('particles-js', {
  "particles": {
      "number": {
          "value": 80,
          "density": {
              "enable": true,
              "value_area": 800
          }
      },
      "color": {
          "value": "#ffffff"
      },
      "shape": {
          "type": "circle",
          "stroke": {
              "width": 0,
              "color": "#000000"
          },
          "polygon": {
              "nb_sides": 5
          }
      },
      "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
          }
      },
      "size": {
          "value": 3,
          "random": true,
          "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
          }
      },
      "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
      },
      "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
          }
      }
  },
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          },
          "onclick": {
              "enable": true,
              "mode": "push"
          },
          "resize": true
      },
      "modes": {
          "grab": {
              "distance": 400,
              "line_linked": {
                  "opacity": 1
              }
          },
          "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
          },
          "repulse": {
              "distance": 200,
              "duration": 0.4
          },
          "push": {
              "particles_nb": 4
          },
          "remove": {
              "particles_nb": 2
          }
      }
  },
  "retina_detect": true
});
