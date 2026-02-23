
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

function toggleNav() {
  const nav = document.getElementById("myTopnav");
  nav.classList.toggle("responsive");
}

// Toggle dropdown on mobile
document.querySelectorAll('.dropbtn').forEach(btn => {
  btn.addEventListener('click', function(e){
    const dropdown = this.nextElementSibling;
    dropdown.classList.toggle('show');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
      question.classList.toggle('active'); // Active style (burgundy + icon)

      const answer = question.nextElementSibling; // Select next div
      if (answer.style.maxHeight) {
        // Close answer
        answer.style.maxHeight = null;
        answer.style.paddingTop = "0";
        answer.style.paddingBottom = "0";
      } else {
        // Open answer
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.paddingTop = "15px";
        answer.style.paddingBottom = "15px";
      }
    });
  });
});