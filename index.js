const menu = document.getElementById('menu');
const openMenu = document.getElementById('open-menu');
const menuCloser = document.getElementById('menu-closer');
const slideIn = [
    { transform: "translateX(15rem)" },
    { transform: "translateX(0)" },
  ];
  const slideOut = [
    { transform: "translateX(0)" },
    { transform: "translateX(15)" },
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
  openMenu.animate(slideOut, timeSlide)
  setTimeout(() => {
    openMenu.style.display = 'none';
  }, 600);
});

