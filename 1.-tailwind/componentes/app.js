const boton = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");

boton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});