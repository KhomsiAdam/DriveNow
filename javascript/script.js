const mobileBtn = document.getElementById('menu-open')
    nav = document.querySelector('nav')
    mobileBtnClose = document.getElementById('menu-close');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('mobile-menu-open');
})

mobileBtnClose.addEventListener('click', () => {
    nav.classList.remove('mobile-menu-open');
})