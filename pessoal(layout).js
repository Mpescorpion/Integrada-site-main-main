const canvas = document.getElementById('galaxy-background');
const ctx = canvas.getContext('2d');

let stars = [];
const starCount = 300;
const color = 'rgba(1, 2, 34, 0.945)';

// Ajusta o tamanho do canvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Cria estrelas
function createStars() {
  stars = [];
  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      speed: Math.random() * 0.5,
      alpha: Math.random(),
    });
  }
}

// Animação das estrelas
function animateStars() {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'white';
  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.globalAlpha = star.alpha;
    ctx.fill();

    // Move as estrelas
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(animateStars);
}

createStars();
animateStars();
