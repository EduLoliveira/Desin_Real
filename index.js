const botaoMenu = document.querySelector('.logo__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menuLateral--ativo')
})
