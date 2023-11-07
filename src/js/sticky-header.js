// fix header on scroll
const scrollHeader = document.querySelector('#header-scroll');
const firstScreen = document.querySelector('.first-screen').offsetHeight - 20;

window.addEventListener('scroll', () => {
  if (window.pageYOffset > (scrollHeader.offsetTop + firstScreen)) {
    scrollHeader.classList.add("sticky");
  } else {
    scrollHeader.classList.remove("sticky");
  }
})
// add active class for active menu item in scroll
const meinMenu = document.querySelectorAll('.header_menu-main a');
const scrollMenu = document.querySelectorAll('.header-scroll_menu a');

function removeActiveClass() {
  scrollMenu.forEach((scrollMenu) => scrollMenu.classList.remove('active'));

}
for (const link of scrollMenu) {
  link.addEventListener('click', () => {
    removeActiveClass();
    link.classList.add('active')
  })
}
// add active class for active menu item in scroll menu after clicking om mein menu item
const firstMenuLinks = document.querySelectorAll('.header_menu-main a');
const secondMenuLinks = document.querySelectorAll('.header-scroll_menu a');

firstMenuLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    secondMenuLinks[index].classList.add('active');
  });
});
