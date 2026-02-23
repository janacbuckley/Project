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
  const newsCards = document.querySelectorAll('.news-card');
  const loadMoreBtn = document.getElementById('loadMoreBtn');

  let visibleCount = 3; // Initially show 3 cards

  // Show initial cards
  newsCards.forEach((card, i) => {
    if(i < visibleCount) {
      card.classList.remove('hidden');
      card.classList.add('fade-in');
    }
  });

  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-category');

      visibleCount = 3; // Reset visible count

      const filteredCards = Array.from(newsCards).filter(card =>
        category === 'all' || card.getAttribute('data-category') === category
      );

      // Fade out all cards first
      newsCards.forEach(card => {
        card.classList.add('hidden');
        card.classList.remove('fade-in');
      });

      // Then fade in filtered cards
      filteredCards.slice(0, visibleCount).forEach(card => {
        card.classList.remove('hidden');
        card.classList.add('fade-in');
      });

      loadMoreBtn.style.display = filteredCards.length > visibleCount ? 'inline-block' : 'none';
    });
  });

  // Load More functionality
  loadMoreBtn.addEventListener('click', () => {
    const activeCategory = document.querySelector('.filter-btn.active').getAttribute('data-category');

    const filteredCards = Array.from(newsCards).filter(card =>
      activeCategory === 'all' || card.getAttribute('data-category') === activeCategory
    );

    visibleCount += 3;

    filteredCards.slice(0, visibleCount).forEach(card => {
      card.classList.remove('hidden');
      card.classList.add('fade-in');
    });

    if(visibleCount >= filteredCards.length) {
      loadMoreBtn.style.display = 'none';
    }
  });
});