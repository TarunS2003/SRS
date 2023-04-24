var cursorTrail = document.querySelector('.cursor-trail');
var prevX = 0;
var prevY = 0;
var timeout;
var originalWidth = parseInt(getComputedStyle(cursorTrail).width);
var originalHeight = parseInt(getComputedStyle(cursorTrail).height);
document.addEventListener('mousemove', function(e) {
  var x = e.clientX;
  var y = e.clientY;
  var deltaX = x - prevX;
  var deltaY = y - prevY;
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }
  if (deltaX !== 0) {
    var width = Math.abs(deltaX) + originalWidth;
    cursorTrail.style.width = width + 'px';
    cursorTrail.style.transformOrigin = deltaX > 0 ? '100% 50%' : '0% 50%';
  } else {
    cursorTrail.style.width = originalWidth + 'px';
  }
  if (deltaY !== 0) {
    var height = Math.abs(deltaY) + originalHeight;
    cursorTrail.style.height = height + 'px';
    cursorTrail.style.transformOrigin = deltaY > 0 ? '50% 100%' : '50% 0%';
  } else {
    cursorTrail.style.height = originalHeight + 'px';
  }
  timeout = window.requestAnimationFrame(function() {
    cursorTrail.style.width = originalWidth + 'px';
    cursorTrail.style.height = originalHeight + 'px';
    cursorTrail.style.transformOrigin = '50% 50%';
  });
  cursorTrail.style.left = x - (cursorTrail.offsetWidth / 2) + 'px';
  cursorTrail.style.top = y - (cursorTrail.offsetHeight / 2) + 'px';
  prevX = x;
  prevY = y;
});
