// sidebar
let navbar = document.querySelector('.navbar');

function hidenav() {
  navbar.classList.add('hidenav');
}

function shownav() {
  navbar.classList.remove('hidenav');
}

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      hidenav();
    } else {
      shownav();
    }
  });
}, {
   threshold: 0.1
});

const trigger = document.getElementById('sec1');
observer2.observe(trigger);
