const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.onclick = function () {
        panels.forEach((p) => p.classList.remove('active'));
        this.classList.add('active');
    };
});
