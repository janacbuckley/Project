document.addEventListener('DOMContentLoaded', () => {
  // carousel code...

  // Services button navigation
  const servicesBtn = document.querySelector('.dropbtn');
  if (servicesBtn) {
    servicesBtn.addEventListener('click', () => {
      window.location.href = 'services.html';
    });
  }
});

function toggleMenu() {
  document.getElementById("myTopnav").classList.toggle("responsive");
}

document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');

      // Loop through gallery items and show/hide
      galleryItems.forEach(item => {
        item.classList.remove('fade-in'); // reset animation
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.style.display = 'block';
          setTimeout(() => item.classList.add('fade-in'), 50); // fade-in effect
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});