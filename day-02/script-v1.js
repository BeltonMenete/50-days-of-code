const btnPrev = document.querySelector('#prev');
const btnNext = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');
const progressBar = document.querySelector('.progress');
let step = 0;

btnNext.onclick = () => {
    console.clear();
    if (step < 4) step++;
    toggleActiveButtons();
    updateProgressBar();
    addActiveCircle();
};

btnPrev.onclick = () => {
    console.clear();
    if (step > 0) step--;
    toggleActiveButtons();
    removeActiveCircle();
    updateProgressBar();
};

function updateProgressBar() {
    progressBar.style.width = Math.round((step / 3) * 100) + '%';
    console.log(progressBar.style.width);
}

function addActiveCircle() {
    circles.forEach((circle, index) => {
        if (index <= step) {
            circle.classList.add('active');
        }
    });
}

function removeActiveCircle() {
    circles.forEach((circle, index) => {
        if (index == step) {
            circles[index + 1].classList.remove('active');
        }
    });
}

function toggleActiveButtons() {
    if (step >= 1) {
        btnPrev.removeAttribute('disabled');
    }
    if (step > 2) {
        btnNext.setAttribute('disabled', '');
    }
    if (step <= 0) {
        step = 0;
        btnPrev.setAttribute('disabled', '');
        btnNext.removeAttribute('disabled');
    }
}
