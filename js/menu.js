function menuHamburger() {
    let menuMobile = document.querySelector('.menu-mobile')

    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
       // document.querySelector('.icon').src = "img/icon-hamburger-removebg-preview.png";
    }else {
        menuMobile.classList.add('open')
    }

};