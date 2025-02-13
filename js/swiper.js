// swiper-init.js

// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1, // Show 1.2 slides on small screens (part of the next slide is visible)
    spaceBetween: 10, // Spacing between slides (20px)
    centeredSlides: false, // Do not center the active slide
    autoplay: {
      delay: 3000, // Autoplay delay in milliseconds
      disableOnInteraction: false, // Allow autoplay to continue after user interaction
    },
    pagination: {
      el: '.swiper-pagination', // Pagination element
      clickable: true, // Allow clicking on pagination to navigate
    },
    breakpoints: {
      // When window width is >= 600px
      600: {
        slidesPerView: 2, // Show 2 slides on medium screens
        spaceBetween: 30, // Increase spacing to 30px on medium screens
      },
      // When window width is >= 900px
      900: {
        slidesPerView: 3, // Show 3 slides on larger screens
        spaceBetween: 40, // Increase spacing to 40px on larger screens
      },
      // When window width is < 600px (small screens)
      0: {
        slidesPerView: 1, // Show 1.2 slides on small screens
        spaceBetween: 20, // Keep spacing at 20px
      }
    }
  });