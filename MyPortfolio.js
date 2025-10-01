// Function to handle the transition from the intro splash screen to the main portfolio
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