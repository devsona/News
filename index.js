const menu = document.getElementById('menu');
const openMenu = document.getElementById('open-menu');
const menuCloser = document.getElementById('menu-closer');
const slideIn = [
    { transform: "translateX(15rem)" },
    { transform: "translateX(0)" },
  ];
  
const timeSlide = {
    duration: 400,
    iterations: 1,
};


menu.addEventListener('click', function() {
    openMenu.animate(slideIn, timeSlide)
    openMenu.style.display = 'block';
});

menuCloser.addEventListener('click', function() {
  openMenu.style.display = 'none';

});

