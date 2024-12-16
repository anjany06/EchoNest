// script.js

document.addEventListener("DOMContentLoaded", function() {
  // Function to detect if the user is on a mobile device
  function isMobileDevice() {
      return /Mobi|Android/i.test(navigator.userAgent);
  }

  // Redirect or show a message if on a mobile device
  if (isMobileDevice()) {
      // Option 1: Redirect to a different page
      window.location.href = "unsupported.html"; // Create an unsupported.html page

      // Option 2: Show an alert message (uncomment the next line if you prefer this option)
      // alert("This website is not supported on mobile devices. Please visit on a desktop.");
  }
  
  // Existing code for responsive navbar
  const navbar = document.querySelector('.navbar');
  const joinButton = document.querySelector('.join');
  const contactButton = document.querySelector('.contactUs');

  const toggleNavbar = () => {
      navbar.classList.toggle('active');
  };

  joinButton.addEventListener('click', toggleNavbar);
  contactButton.addEventListener('click', toggleNavbar);
});