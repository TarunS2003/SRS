//---- slide buttons ---- //  
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