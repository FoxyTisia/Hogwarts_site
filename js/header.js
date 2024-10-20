const menuButton = document.querySelector(".menu_button");
const menu = document.querySelector(".menu");


menuButton.addEventListener( "click", function () {
    const isMenuOpened =  menu.style.right === '0px'

    if (isMenuOpened) {
        menu.style.right = '-1000px'
    } else {
        menu.style.right = '0px'
    }
})
