// Smooth Scroll
const navLinks = document.querySelectorAll('nav ul li a');

for (const link of navLinks) {
link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
e.preventDefault();
const href = this.getAttribute('href');
const offsetTop = document.querySelector(href).offsetTop;
scroll({
top: offsetTop,
behavior: 'smooth'
});
}

// Toggle Navigation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
navMenu.classList.toggle('show');
});

// Gallery Lightbox
const images = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const caption = document.querySelector('.caption');

images.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = image.src;
    caption.textContent = image.alt;
  });
});

const closeModal = () => {
  modal.style.display = 'none';
};

modal.addEventListener('click', closeModal);

// Contact Form Submission
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Check if name, email, and message are not empty
  if (name.trim() && email.trim() && message.trim()) {
    // Simulate sending message
    setTimeout(() => {
      successMessage.style.display = 'block';
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    }, 1000);
  }
});