const elements = document.querySelectorAll("section, .card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.1
});

elements.forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    speed: Math.random() * 0.5
  });
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#7aa2ff";
    ctx.fill();

    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(animateStars);
}
function openProject(id) {
  const modal = document.getElementById("modal");
  const title = document.getElementById("modal-title");
  const text = document.getElementById("modal-text");

  if (id === "p1") {
    title.innerText = "Filtre passe-bande";
    text.innerText = "Conception complète du circuit, simulation et optimisation des fréquences.";
  }

  if (id === "p2") {
    title.innerText = "Système embarqué";
    text.innerText = "Programmation d’un microcontrôleur avec gestion temps réel.";
  }

  if (id === "p3") {
    title.innerText = "Simulation EM";
    text.innerText = "Analyse avancée des champs électromagnétiques avec outils spécialisés.";
  }

  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

animateStars();
