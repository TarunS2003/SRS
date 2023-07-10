let navbar = document.querySelector('.navbar');

function hideNavbar() {
  navbar.classList.add('hidenavbar');
}

function showNavbar() {
  navbar.classList.remove('hidenavbar');
}

const observer9 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      hideNavbar();
    } else {
      showNavbar();
    }
  });
}, {
  threshold: 0.1
});

const section1 = document.querySelector('#sec1');
observer9.observe(section1);
