// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


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

// const main = document.querySelector("#main");
// const cursor = document.querySelector("#cursor");

// Check if it's a touch device
const isTouchDevice = 'ontouchstart' in window;
 
const createCursorFollower = () => {
  const $el = document.querySelector('#cursor');
 
  // Each time the mouse coordinates are updated,
  // we need to pass the values to gsap in order
  // to animate the element
  window.addEventListener('mousemove', (e) => {
    const { target, x, y } = e;
    // Check if target is inside a link or button
    const isTargetLinkOrBtn = target?.closest('a') || target?.closest('button');
    // GSAP config
    gsap.to($el, {
      x: x + 3,
      y: y + 3,
      duration: 0.7,
      ease: 'power4', // More easing options here: https://gsap.com/docs/v3/Eases/
      opacity: isTargetLinkOrBtn ? 0.6 : 1,
      transform: `translate(-50%, -50%) scale(${isTargetLinkOrBtn ? 3 : 1})`,
    });
  });
 
  // Hiding the cursor element when the mouse cursor
  // is moved out of the page
  document.addEventListener('mouseleave', (e) => {
    gsap.to($el, {
      duration: 0.7,
      opacity: 0,
    });
  });
};
 
// Only invoke the function if isn't a touch device
if (!isTouchDevice) {
  createCursorFollower();
}