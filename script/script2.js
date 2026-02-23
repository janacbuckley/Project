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
  // carousel code...

  // Services button navigation
  const servicesBtn = document.querySelector('.dropbtn');
  if (servicesBtn) {
    servicesBtn.addEventListener('click', () => {
      window.location.href = 'services.html';
    });
  }
});