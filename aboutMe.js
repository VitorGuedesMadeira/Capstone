const menuButton = document.querySelector('.toggle-menu');
const headerTag = document.querySelector('.header-section');

function toggleMenu() {
  headerTag.classList.toggle('showMenu');
}

function closeMenu() {
  headerTag.classList.remove('showMenu');
}

menuButton.onclick = () => {toggleMenu();};