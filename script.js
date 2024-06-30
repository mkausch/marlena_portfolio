document.addEventListener('DOMContentLoaded', (event) => {
    const circle = document.querySelector('.circle');
    const content = document.getElementById('content');

    circle.addEventListener('animationend', () => {
        content.style.display = 'block';
        circle.style.display = 'none'; 
    });
});