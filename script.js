const navLinks = document.querySelectorAll('.link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        link.classList.add('active');
    });
})

const bar = document.querySelector('.bar');
const menu = document.querySelector('.menu');
const body = document.body;
bar.addEventListener('click', () => {
  if(menu.classList.contains('active-menu')) {
    menu.classList.remove('active-menu');
    body.classList.remove('menu-open'); // Remove class when closing menu
  } else {
    menu.classList.add('active-menu');
    body.classList.add('menu-open'); // Add class when opening menu
  }
});

const links = document.querySelectorAll('.link');
links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active-menu');
    body.classList.remove('menu-open'); // Remove class when clicking a link
  })
});