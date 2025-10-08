const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.getElementsByClassName('circle');
const progress = document.getElementById('progress');
console.log(progress);
let currentActive = 1;

next.addEventListener('click', function () {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
});

prev.addEventListener('click', function () {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
});

function update() {
    Array.from(circles).forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
    const actives = document.getElementsByClassName('active');

    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
}
