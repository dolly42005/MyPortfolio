// Function to handle the transition from the intro splash screen to the main portfolio
console.log("JS loaded");
function enterPortfolio() {
  const intro = document.getElementById('intro');
  const portfolio = document.getElementById('portfolio');

  // Add the fade-out class to start the animation
  intro.classList.add('fade-out');

  // Wait for the animation to finish before hiding the intro and showing the portfolio
  setTimeout(() => {
    intro.style.display = 'none';
    portfolio.style.display = 'block';
    // Trigger the fade-in animation for the portfolio content
    portfolio.style.opacity = '1';
  }, 800);
}

// Event listener for the "Enter Portfolio" button click
document.getElementById('enterBtn').addEventListener('click', enterPortfolio);

// Optional: Add a scroll listener to change the navbar style on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// ================= EMAILJS PART (NEW) =================

// Initialize EmailJS
(function () {
  emailjs.init("qropQLobxsVbbD-EB");
})();

// Get form
const form = document.getElementById("contact-form");

// Handle form submit
form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  emailjs.sendForm("service_e66k4ni", "template_tsaa1xy", this)
    .then(function () {
      alert("✅ Message sent successfully!");
      form.reset();
    })
    .catch(function (error) {
      alert("❌ Failed to send message");
      console.log(error);
    });
});
