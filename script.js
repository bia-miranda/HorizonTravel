function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
       menuMobile.classList.remove('open');
       document.querySelector('.icon').src = "icons8-menu-squared-50.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "icons8-fechar-janela-48.png";
    }
}