//---- repeat hiding ---- //
const observer1 = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenRepeat = document.querySelectorAll('.hidden_rep');
hiddenRepeat.forEach((el) => observer1.observe(el));

//---- hidden for once ----//
const observer2 = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add ('show');
    } 
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer2.observe(el));

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

// follower (not applied) //

let area = document.querySelector('body').getBoundingClientRect();
let follower = document.getElementById('follower');

document.addEventListener('mousemove', function(e) {
  let left = e.clientX;
  let top = e.clientY;
  let insideArea = (left >= area.left && left <= area.right && top >= area.top && top <= area.bottom);

  if (insideArea) {
    follower.style.opacity = 1;
    follower.style.left = left + 'px';
    follower.style.top = top + 'px';
  } else {
    follower.style.opacity = 0;
  }
});

// ---- type writer effect ---- //
const speed = 3; /* The speed/duration of the effect in milliseconds */

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
// Get references to the buttons and div elements
const forwardButton = document.querySelector('.forwardbutton');
const backwardButton = document.querySelector('.prevbutton');
const slideContainers = document.querySelectorAll('.slide');

// Add event listeners to the buttons
forwardButton.addEventListener('click', handleForwardButtonClick);
backwardButton.addEventListener('click', handleBackwardButtonClick);

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







