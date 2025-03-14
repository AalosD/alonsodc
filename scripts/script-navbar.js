function toggleMenu() {
    const menu = document.getElementById('offcanvasMenu');
    const overlay = document.getElementById('overlay');

    menu.classList.toggle('open');
    overlay.classList.toggle('active');
}