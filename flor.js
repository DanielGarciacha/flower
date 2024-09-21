function animateFlower(flowerId) {
    const flower = document.getElementById(flowerId);
    const center = flower.querySelector('.center');
    const brownDot = center.querySelector('.brown-dot'); // Punto marrón
    const petals = flower.querySelectorAll('.petal');
    const leaves = flower.querySelectorAll('.leaf');

    // Animar tallo
    setTimeout(() => {
        flower.style.height = `${300 + Math.random() * 50}px`;
    }, 500);

    // Animar hojas
    leaves.forEach((leaf, index) => {
        setTimeout(() => {
            leaf.style.transform = leaf.style.transform.replace('scale(0)', 'scale(1)');
        }, 2000 + index * 500);
    });

    // Animar pétalos
    petals.forEach((petal, index) => {
        setTimeout(() => {
            petal.style.transform = petal.style.transform.replace('scale(0)', 'scale(1)');
        }, 4000 + index * 200);
    });

    // Animar centro de la flor
    setTimeout(() => {
        center.style.transform = 'scale(1)';
    }, 6000);

    // Mostrar el punto marrón en el centro después
    setTimeout(() => {
        brownDot.style.opacity = '1';  // Animar la opacidad del punto marrón
    }, 7000);
}

// Llamar a la animación para ambas flores
document.addEventListener('DOMContentLoaded', () => {
    animateFlower('flower1');
    animateFlower('flower2');
});

