// Debugging: Log when the JavaScript file is loaded
console.log("JavaScript file loaded!");

// Function to toggle the mobile menu
function toggleMenu() {
  console.log("Hamburger clicked!"); // Debugging: Log when the hamburger is clicked
  const headerRight = document.getElementById("headerRight");
  if (headerRight) {
    console.log("Toggling show class on headerRight"); // Debugging: Log before toggling
    headerRight.classList.toggle("show");
    console.log("headerRight classList:", headerRight.classList); // Debugging: Log the class list
  } else {
    console.error("headerRight element not found!"); // Debugging: Log if the element is missing
  }
}

// Add event listeners after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded!"); // Debugging: Log when the DOM is ready
  const hamburger = document.querySelector(".hamburger");
  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
    console.log("Event listener added to hamburger!"); // Debugging: Log when the event listener is added
  } else {
    console.error("Hamburger element not found!"); // Debugging: Log if the element is missing
  }
});