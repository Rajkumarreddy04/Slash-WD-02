document.addEventListener("DOMContentLoaded", function () {
    const buyButton = document.querySelector(".cta button");
  
    buyButton.addEventListener("click", function () {
      alert("Thank you for choosing Glowup Cosmetics! Your order is being processed.");
    });
  
    // Smooth scrolling for internal links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
      anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  
    // Dynamic feature highlighting on hover
    document.querySelectorAll(".feature").forEach(feature => {
      feature.addEventListener("mouseover", function () {
        this.style.backgroundColor = "#ddd";
        this.style.transition = "background 0.3s ease";
      });
  
      feature.addEventListener("mouseout", function () {
        this.style.backgroundColor = "#f4f4f4";
      });
    });
  });