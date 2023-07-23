// -----slide from top to bottom ---- //
const observer3 = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('slide_bottom');
    } else {
      entry.target.classList.remove('slide_bottom');
    }
  });
});

const hiddenslide = document.querySelectorAll('.hidden_top');
hiddenslide.forEach((el) => observer3.observe(el));

// ---- slide from left ---- //
const observer4 = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('slide_left');
    } else {
      entry.target.classList.remove('slide_left');
    }
  });
});

const hiddenleft = document.querySelectorAll('.hidden_right');
hiddenleft.forEach((el) => observer4.observe(el));

//---- cont class hover event src change ----//
let links = document.querySelectorAll('.cont');
let windowimgs = document.querySelectorAll('.window');

links.forEach(function(link, index) {
  link.addEventListener('mouseover', function() {
    windowimgs[index].src = 'Window open 1.png';
  });
  
  link.addEventListener('mouseout', function() {
    windowimgs[index].src = 'Window_closed1.png';
  });
});

// follower //

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const colors = [
  "#861657",
  "#92255e",
  "#a53b69",
  "#b34b71",
  "#bd5777",
  "#c35f7b",
  "#cf6c81",
  "#e4858e",
  "#f09495",
  "#ffa69e"
];
circles.forEach(function(circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x + window.scrollX;
  let y = coords.y + window.scrollY;

  circles.forEach(function(circle, index) {
    circle.style.left = x - 10 + "px";
    circle.style.top = y - 10 + "px";
    circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

    circle.x = x;
    circle.y = y;

    const nextcircle = circles[index + 1] || circles[0];
    x += (nextcircle.x - x) * 0.25;
    y += (nextcircle.y - y) * 0.25;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

function hidetrail() {
  circles.forEach(function(circle) {
    circle.style.display = 'none';
  });
}

function showtrail() {
  circles.forEach(function(circle) {
    circle.style.display = 'flex';
  });
}

// ---- type writer effect ---- //
const speed = 5; /* The speed/duration of the effect in milliseconds */

function typeWriter(element) {
  const txt = element.innerHTML;
  let i = 0; // Index for tracking the current character

  element.innerHTML = ''; // Clear the element's content

  function type() {
    if (i < txt.length) {
      const char = txt.charAt(i);
      element.innerHTML += char;
      i++;

      // Schedule the next character typing
      setTimeout(type, speed);
    }
  }

  // Start typing when the element is intersected
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target); // Stop observing once element is intersected
          type();
        }
      });
    },
    { threshold: 0.5 } // Adjust the threshold value as needed
  );

  observer.observe(element);
}

const elements = document.querySelectorAll('.type');
elements.forEach((element) => {
  typeWriter(element);
});

//---- slide buttons ---- //
const forwardButton = document.querySelector('.forwardbutton');
const backwardButton = document.querySelector('.prevbutton');
const slideContainers = document.querySelectorAll('.slide');

// Add event listeners to the buttons
// forwardButton.addEventListener('click', handleForwardButtonClick);
// backwardButton.addEventListener('click', handleBackwardButtonClick);

// Event handler for the forward button click
function handleForwardButtonClick() {
  const activeIndex = getActiveIndex();
  const nextIndex = getNextIndex(activeIndex);

  if (nextIndex !== -1) {
    slideContainers[activeIndex].classList.remove('active');
    slideContainers[activeIndex].classList.add('prev');

    slideContainers[nextIndex].classList.remove('next');
    slideContainers[nextIndex].classList.add('active');
  }
}

// Event handler for the backward button click
function handleBackwardButtonClick() {
  const activeIndex = getActiveIndex();
  const prevIndex = getPrevIndex(activeIndex);

  if (prevIndex !== -1) {
    slideContainers[activeIndex].classList.remove('active');
    slideContainers[activeIndex].classList.add('next');

    slideContainers[prevIndex].classList.remove('prev');
    slideContainers[prevIndex].classList.add('active');
  }
}

// Helper function to get the index of the active slide container
function getActiveIndex() {
  for (let i = 0; i < slideContainers.length; i++) {
    if (slideContainers[i].classList.contains('active')) {
      return i;
    }
  }
  return -1;
}

// Helper function to get the index of the next slide container
function getNextIndex(activeIndex) {
  if (activeIndex !== -1 && activeIndex < slideContainers.length - 1) {
    return activeIndex + 1;
  }
  return -1;
}

// Helper function to get the index of the previous slide container
function getPrevIndex(activeIndex) {
  if (activeIndex !== -1 && activeIndex > 0) {
    return activeIndex - 1;
  }
  return -1;
}

// sidebar
let sidebar = document.querySelector('.sidebar');

function hidenav() {
  sidebar.classList.add('hidenav');
}

function shownav() {
  sidebar.classList.remove('hidenav');
}

const observer1 = new IntersectionObserver((entries) => {
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

const navbar = document.querySelector('header');
observer1.observe(navbar);
     

   document.addEventListener("keydown", function(event) {
      switch (event.key) 
      {case "ArrowLeft":
          handleBackwardButtonClick();
          break;
        case "ArrowRight":
          handleForwardButtonClick();
          break;
      }
    });
   // sidebar
let btnav = document.querySelector('.navbar');

function hidensidebar() {
 btnav.classList.add('hidenav');
}

function showsidebar() {
  btnav.classList.remove('hidenav');
}

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      hidensidebar();
    } else {
      showsidebar();
    }
  });
}, {
   threshold: 0.1
});

const trigger = document.querySelector('header');
observer2.observe(trigger);