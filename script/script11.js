function toggleMenu() {
  document.getElementById("myTopnav").classList.toggle("responsive");

    }
    const toggle = document.getElementById("enterprise-toggle");
    const content = document.getElementById("enterprise-content");
    const arrow = document.getElementById("enterprise-arrow");

    toggle.addEventListener("click", () => {
      if (content.style.display === "block") {
        content.style.display = "none";
        arrow.classList.remove("rotate");
      } else {
        content.style.display = "block";
        arrow.classList.add("rotate");
      }
    });