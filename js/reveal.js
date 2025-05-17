// Tüm sayfadaki belirli öğelere otomatik "reveal" sınıfı ekle
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("section, div, h1, h2, p, img").forEach(el => {
      el.classList.add("reveal");
});

// Scroll ile reveal animasyonu
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
    } else {
        reveals[i].classList.remove("active");
    }
    }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
});
  