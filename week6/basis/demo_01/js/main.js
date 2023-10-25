// Cache the elements
const $socialsElement = document.querySelector('.socials');
const $galleryElement = document.querySelector('.gallery');
const $overlayElement = document.querySelector('.overlay');
setInterval(() => {
  $overlayElement.classList.toggle('is--open');
}, 1000);


// Define the function generateHTMLForGallery
function generateHTMLForGallery (gallery) {
  return gallery.map(image => `
    <li class="gallery__image">
      <img src="${image.link}" alt="${image.title}" />
    </li>
  `).join('');
}

// Define the function with the name generateUIForGallery
function generateUIForGallery () {
  console.log('2.2 Generate the User Interface for gallery.');
  $galleryElement.innerHTML = generateHTMLForGallery(gallery);
}

// Define the function generateHTMLForSocials
function generateHTMLForSocials (socials) {
  return socials.map(social => `
    <li>
      <a href="${social.link}" title="${social.type}">${social.type}</a>
    </li>
  `).join('');
}

// Define the function with the name generateUIForSocials
function generateUIForSocials () {
  console.log('2.1 Generate the User Interface for socials.');
  $socialsElement.innerHTML = generateHTMLForSocials(socials);
}

// Define the function with the name generateUI
function generateUI () {
  console.log('2. Generate the User Interface.');
  // Call the function with the name generateUIForSocials
  generateUIForSocials();
  // Call the function with the name generateUIForGallery
  generateUIForGallery();
}

// Define the init function
function init () {
  console.log('1. Initialize the application.');
  // Call the function with the name generateUI
  generateUI();
}

// Call the function with the name init
init();