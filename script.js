// Image Slider Functionality
const sliders = document.querySelectorAll('.image-slider');

sliders.forEach((slider) => {
  let currentIndex = 0;
  const images = slider.querySelectorAll('.slider-image');
  const prevBtn = slider.querySelector('.prev-arrow');
  const nextBtn = slider.querySelector('.next-arrow');

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.remove('active');
      if (i === index) {
        img.classList.add('active');
      }
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);
  }
});

// Disable right-click
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  return false;
});

// Disable F12 and other dev tools shortcuts
document.addEventListener('keydown', function(e) {
  if (e.keyCode === 123) {
    e.preventDefault();
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
    e.preventDefault();
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
    e.preventDefault();
    return false;
  }
  if (e.ctrlKey && e.keyCode === 85) {
    e.preventDefault();
    return false;
  }
  if (e.ctrlKey && e.keyCode === 83) {
    e.preventDefault();
    return false;
  }
});

// Disable image dragging
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('dragstart', function(e) {
      e.preventDefault();
    });
  });
});

