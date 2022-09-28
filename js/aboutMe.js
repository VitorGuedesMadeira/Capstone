//  ----------------- Variables ------------------------- //

const menuButton = document.querySelector('.toggle-menu2');
const headerTag = document.querySelector('.header-section2');

//  ---------------- TOGGLE MENU ------------------------ //

function toggleMenu() {
  headerTag.classList.toggle('showMenu');
}

menuButton.onclick = () => { toggleMenu(); };