const mobileIcon = document.querySelector('.menu-mobile_icon');
const mobileMenu = document.querySelector('#header_menu-mobile');
const siteHeader = document.querySelector('.site-header');

const mobileIconScroll = document.querySelector('.menu-mobile_icon-scroll');
const mobileMenuScroll = document.querySelector('.mobile-scroll');
const mobileMenuScrollItmes = document.querySelectorAll('.mobile-scroll a');

 function showMenu(){
    mobileIcon.classList.toggle('show-mobile');
    mobileMenu.classList.toggle('show-mobile');
    siteHeader.classList.toggle('show-mobile');
}
mobileIcon.addEventListener('click', showMenu);


function showScrollMenu(){
    mobileMenuScroll.classList.toggle('show-mobile');
    mobileIconScroll.classList.toggle('show-mobile');
}

mobileIconScroll.addEventListener('click', showScrollMenu);


for (const link of mobileMenuScrollItmes) {
    link.addEventListener('click',()=>{
        mobileMenuScroll.classList.toggle('show-mobile');
        mobileIconScroll.classList.toggle('show-mobile');
    })
}