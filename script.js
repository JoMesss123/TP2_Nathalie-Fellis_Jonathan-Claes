// MENU MOBILE
const btn = document.getElementById('menu_btn');
const nav = document.getElementById('menu');
const barsIcon = document.querySelector('.fa-bars-staggered');
const timesIcon = document.querySelector('.fa-times');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
    toggleMenuIcon();
});

function toggleMenuIcon() {
    barsIcon.classList.toggle('hidden');
    timesIcon.classList.toggle('hidden');
}

