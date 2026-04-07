const canvas = document.getElementById('circuit-bg');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawGrid() {
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 0.5;

    // Création d'une grille légère style papier millimétré
    for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

// Animation simple de "courant" qui passe
let offset = 0;
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    
    // Simuler un signal
    ctx.beginPath();
    ctx.strokeStyle = '#0077ff';
    ctx.lineWidth = 2;
    ctx.moveTo(0, canvas.height / 2);
    
    for (let i = 0; i < canvas.width; i++) {
        let y = canvas.height / 2 + Math.sin(i * 0.01 + offset) * 20;
        ctx.lineTo(i, y);
    }
    
    ctx.stroke();
    offset += 0.05;
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
