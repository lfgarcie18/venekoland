// Configuración del juego
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Configuración del jugador
const jugador = {
  x: 100,
  y: 100,
  width: 50,
  height: 70,
  velocidadX: 0,
  velocidadY: 0,
  gravedad: 0.5,
  salto: -10,
  colision: false,
  vidas: 3
};

function mostrarGameOver() {
  const gameOverScreen = document.createElement('div');
  gameOverScreen.style.position = 'absolute';
  gameOverScreen.style.top = '50%';
  gameOverScreen.style.left = '50%';
  gameOverScreen.style.transform = 'translate(-50%, -50%)';
  gameOverScreen.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  gameOverScreen.style.color = 'white';
  gameOverScreen.style.padding = '20px';
  gameOverScreen.style.textAlign = 'center';
  gameOverScreen.innerHTML = '<h1>Moriste</h1><button id="reaparecerBtn">Reaparecer</button>';
  document.body.appendChild(gameOverScreen);

  document.getElementById('reaparecerBtn').addEventListener('click', function() {
    document.body.removeChild(gameOverScreen);
    reiniciarJuego();
  });
}

function reiniciarJuego() {
  // Restablecer las propiedades del jugador
  jugador.x = 100;
  jugador.y = 100;
  jugador.velocidadX = 0;
  jugador.velocidadY = 0;
  jugador.vidas = 3;

  // Restablecer la posición de la moneda si es necesario
  moneda.x = 400;
  moneda.y = 200;

  // Reiniciar el bucle del juego
  requestAnimationFrame(actualizar);
}

document.addEventListener('DOMContentLoaded', function() {
  actualizar();
});

// Configuración del enemigo
const enemigo = {
  x: 300,
  y: 100,
  width: 50,
  height: 50,
  velocidadX: 2,
  velocidadY: 0,
  gravedad: 0.5
};

// Configuración de la plataforma
const plataforma = {
  x: 0,
  y: 300,
  width: 800,
  height: 20
};

// Configuración de la moneda
const moneda = {
  x: 400,
  y: 200,
  width: 20,
  height: 20
};

const jugadorSprite = new Image();
jugadorSprite.src = '../../sprites/idle.webp';

// Función para dibujar el jugador
function dibujarJugador() {
  ctx.drawImage(jugadorSprite, jugador.x, jugador.y, jugador.width, jugador.height);
}

// Función para dibujar el enemigo
function dibujarEnemigo() {
  ctx.fillStyle = 'red';
  ctx.fillRect(enemigo.x, enemigo.y, enemigo.width, enemigo.height);
}

// Función para dibujar la plataforma
function dibujarPlataforma() {
  ctx.fillStyle = 'green';
  ctx.fillRect(plataforma.x, plataforma.y, plataforma.width, plataforma.height);
}

// Función para dibujar la moneda
function dibujarMoneda() {
  ctx.fillStyle = 'yellow';
  ctx.fillRect(moneda.x, moneda.y, moneda.width, moneda.height);
}

// Función para actualizar el juego
function actualizar() {
  // Actualizar jugador
  jugador.x += jugador.velocidadX;
  jugador.velocidadY += jugador.gravedad;
  jugador.y += jugador.velocidadY;

  // Verificar colisión con la moneda
  if (jugador.x + jugador.width > moneda.x && jugador.x < moneda.x + moneda.width && jugador.y + jugador.height > moneda.y && jugador.y < moneda.y + moneda.height) {
    // El jugador ha tocado la moneda, eliminarla
    moneda.x = -100; // Mover la moneda fuera de la pantalla
    moneda.y = -100;
  }

  // Colisión con la plataforma
  if (jugador.y + jugador.height > plataforma.y && jugador.x + jugador.width > plataforma.x && jugador.x < plataforma.x + plataforma.width) {
    jugador.y = plataforma.y - jugador.height;
    jugador.velocidadY = 0;
    jugador.colision = true;
  } else {
    jugador.colision = false;
  }

  // Limitar movimiento horizontal
  if (jugador.x < 0) {
    jugador.x = 0;
  } else if (jugador.x + jugador.width > width) {
    jugador.x = width - jugador.width;
  }

  // Actualizar enemigo
  enemigo.velocidadY += enemigo.gravedad;
  enemigo.y += enemigo.velocidadY;
  enemigo.x += enemigo.velocidadX;

  if (enemigo.x + enemigo.width > jugador.x && enemigo.x < jugador.x + jugador.width && enemigo.y + enemigo.height > jugador.y && enemigo.y < jugador.y + jugador.height) {
    // El enemigo ha tocado al jugador, restar una vida o terminar el juego
    jugador.vidas--;
    if (jugador.vidas <= 0) {
      // Detener el movimiento del jugador
      jugador.velocidadX = 0;
      jugador.velocidadY = 0;
      mostrarGameOver();
      return; // Detener el bucle de actualización
    }
  }

  if (enemigo.x + enemigo.width > plataforma.x && enemigo.x < plataforma.x + plataforma.width && enemigo.y + enemigo.height > plataforma.y) {
    enemigo.y = plataforma.y - enemigo.height;
    enemigo.velocidadY = 0;
  } else if (enemigo.x + enemigo.width > width) {
    enemigo.x = width - enemigo.width;
    enemigo.velocidadX = -enemigo.velocidadX;
  } else if (enemigo.x < 0) {
    enemigo.x = 0;
    enemigo.velocidadX = -enemigo.velocidadX;
  }

  // Dibujar todo
  ctx.clearRect(0, 0, width, height);
  dibujarJugador();
  dibujarEnemigo();
  dibujarPlataforma();
  dibujarMoneda();

  // Repetir
  requestAnimationFrame(actualizar);
}

// Función para manejar eventos de teclado
function manejarTeclado(event) {
  if (event.type === 'keydown') {
    if (event.key === 'ArrowLeft') {
      jugador.velocidadX = -3; // Ajusta la velocidad para que sea más lenta
    } else if (event.key === 'ArrowRight') {
      jugador.velocidadX = 3; // Ajusta la velocidad para que sea más lenta
    } else if (event.key === 'ArrowUp' && jugador.colision) {
      jugador.velocidadY = jugador.salto;
    }
  } else if (event.type === 'keyup') {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      jugador.velocidadX = 0;
    }
  }
}

// Agregar evento de teclado
document.addEventListener('keydown', manejarTeclado);
document.addEventListener('keyup', manejarTeclado);

// Iniciar juego
actualizar();