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
const emergingToggle = document.getElementById("emerging-toggle");
const emergingContent = document.getElementById("emerging-content");
const emergingArrow = document.getElementById("emerging-arrow");

emergingToggle.addEventListener("click", () => {
  if (emergingContent.style.display === "block") {
    emergingContent.style.display = "none";
    emergingArrow.classList.remove("rotate");
  } else {
    emergingContent.style.display = "block";
    emergingArrow.classList.add("rotate");
  }
});


