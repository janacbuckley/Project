
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
