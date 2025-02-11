// Select all the slides, the slider track, and the container for indicators
const slides = document.querySelectorAll('.slide'); // Grabs all slides
const sliderTrack = document.querySelector('.slider-track'); // Grabs the slider track (container for slides)
const indicatorsContainer = document.querySelector('.slider-indicators'); // Grabs the container for the indicator dots
let currentSlide = 0; // Keeps track of the current slide index

// Create indicators based on the number of slides
slides.forEach((_, index) => {
  const indicator = document.createElement('div'); // Creates a new div element for each indicator
  indicator.classList.add('indicator'); // Adds the class 'indicator' to the indicator
  if (index === 0) indicator.classList.add('active'); // Marks the first indicator as active by default
  indicator.addEventListener('click', () => goToSlide(index)); // Adds an event listener to navigate to the clicked slide
  indicatorsContainer.appendChild(indicator); // Appends the indicator to the container
});

// Update the slider display when the current slide changes
function updateSlider() {
  const slideWidth = slides[0].getBoundingClientRect().width; // Calculates the width of each slide
  sliderTrack.style.transform = `translateX(${-currentSlide * slideWidth}px)`; // Moves the track to the current slide position

  // Update the active class for slides
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide); // Toggles 'active' class based on the current slide
  });

  // Update the active class for indicators
  document.querySelectorAll('.indicator').forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentSlide); // Toggles 'active' class on indicator
  });
}

// Move to the next slide and loop back to the first one when reaching the end
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // Increments the slide index and loops back if it's the last slide
  updateSlider(); // Updates the slider to the new slide
}

// Move to a specific slide when an indicator is clicked
function goToSlide(index) {
  currentSlide = index % slides.length; // Updates the current slide index and loops back if the index exceeds the total number of slides
  updateSlider(); // Updates the slider to the clicked slide
}

// Auto-slide functionality: automatically move to the next slide every 3 seconds
let autoSlideInterval = setInterval(nextSlide, 3000);

// Pause the auto-slide when the mouse enters the slider container
const slider = document.querySelector('.slider-container');
slider.addEventListener('mouseenter', () => clearInterval(autoSlideInterval)); // Stops the interval (pauses the auto-slide)
slider.addEventListener('mouseleave', () => {
  autoSlideInterval = setInterval(nextSlide, 3000); // Resumes the auto-slide when the mouse leaves
});

// Update the slider when the window is resized (ensures it fits correctly on resize)
window.addEventListener('resize', updateSlider); // Updates the slider layout on window resize





/* whatsapp whatsapp whatsapp whatsapp whatsapp whatsapp whatsapp whatsapp */
/* whatsapp whatsapp whatsapp whatsapp whatsapp whatsapp whatsapp whatsapp */
/* whatsapp whatsapp whatsapp whatsapp whatsapp whatsapp whatsapp whatsapp */
/* whatsapp whatsapp whatsapp whatsapp whatsapp whatsapp whatsapp whatsapp */






// Select the hamburger icon and the navigation links container
const hamburger = document.querySelector('.hamburger'); // Grabs the hamburger icon (the three lines)
const navLinks = document.querySelector('.nav-links'); // Grabs the container holding the navigation links

// Add an event listener to the hamburger icon that toggles the "active" class
// When clicked, it opens or closes the mobile menu by showing/hiding the nav links
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Toggles the 'active' class on the hamburger icon
    navLinks.classList.toggle('active'); // Toggles the 'active' class on the nav links container to show/hide it
});

// Add event listeners to each navigation link
// When a link is clicked, the menu will close by removing the "active" classes
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active'); // Removes the 'active' class from the hamburger icon (closes the menu)
    navLinks.classList.remove('active'); // Removes the 'active' class from the nav links container (hides the menu)
}));











const form = document.querySelector('.contact-form');
const successMessage = document.createElement('div');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Show success message
  successMessage.innerHTML = '<p>Your message has been sent successfully!</p>';
  successMessage.style.color = 'green';
  form.parentNode.appendChild(successMessage);
  form.reset(); // Reset form fields
});














