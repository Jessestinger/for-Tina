const overlay = document.getElementById('overlay');
const scene = document.getElementById('scene');

// Start on tap
overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    scene.classList.remove('hidden');
    startEffects();
});

function startEffects() {
    // Sparkles
    const sparkleContainer = document.querySelector('.sparkles');
    for (let i = 0; i < 30; i++) {
        const s = document.createElement('span');
        s.style.left = Math.random() * 100 + '%';
        s.style.top = Math.random() * 100 + '%';
        s.style.animationDelay = Math.random() * 3 + 's';
        sparkleContainer.appendChild(s);
    }

    // Falling petals
    const petalContainer = document.querySelector('.falling-petals');
    setInterval(() => {
        const petal = document.createElement('span');
        petal.innerHTML = '🌹';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDuration = 6 + Math.random() * 4 + 's';
        petalContainer.appendChild(petal);

        setTimeout(() => petal.remove(), 10000);
    }, 700);
}
