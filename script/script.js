
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
  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.review-card');
  const dotsContainer = document.querySelector('.dots');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  let index = 0;
  const gap = 30; // space between cards
  const cardWidth = cards[0].offsetWidth + gap;
  let autoScrollInterval;

  // Create dots
  cards.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);

    dot.addEventListener('click', () => {
      index = i;
      update();
      resetAutoScroll();
    });
  });

  // Update carousel position and active dot
  function update() {
    track.style.transform = `translateX(-${index * cardWidth}px)`;
    document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
    document.querySelectorAll('.dot')[index].classList.add('active');
  }

  // Next / Prev Buttons
  nextBtn.onclick = () => {
    index = (index + 1) % cards.length;
    update();
    resetAutoScroll();
  };



  prevBtn.onclick = () => {
    index = (index - 1 + cards.length) % cards.length;
    update();
    resetAutoScroll();
  };

  // Auto-scroll function
  function autoScroll() {
    index = (index + 1) % cards.length;
    update();
  }

  function resetAutoScroll() {
    clearInterval(autoScrollInterval);
    autoScrollInterval = setInterval(autoScroll, 4000); // 4s per slide
  }

  // Start auto-scroll
  autoScrollInterval = setInterval(autoScroll, 4000);

  // Initial update
  update();
});


