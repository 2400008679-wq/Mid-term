const menuButton = document.getElementById('menuButton');
const mtMenu = document.getElementById('mtMenu');

menuButton.addEventListener('click', () => {
    mtMenu.classList.toggle('active');
    if (mtMenu.classList.contains('active')) {
        menuButton.textContent = '✕';
    } else {
        menuButton.textContent = '☰';
    }
});

const menuLinks = document.querySelectorAll('.mt-link, .contact-button');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mtMenu.classList.remove('active');
        menuButton.textContent = '☰';
    });
});
