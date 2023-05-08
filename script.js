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


// follower //

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
