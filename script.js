
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  sections.forEach((section, index) => {
      if (index !== 0) section.style.display = "none";
  });

  function setActiveLink(targetId) {
      navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === targetId) {
              link.classList.add("active");
          }
      });
  }

  navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          sections.forEach(section => section.style.display = "none");
        
          const targetId = this.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);
          if (targetSection) targetSection.style.display = "block";
          setActiveLink(targetId);
      });
  });
  
});
