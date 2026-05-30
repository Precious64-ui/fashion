// Mobile Menu
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

if(menuIcon){
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close menu when a nav link is clicked
const navLinksItems = document.querySelectorAll('.nav-links a');

navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter form');

if(newsletterForm){
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing!');
        newsletterForm.reset();
    });
}

// Contact Form
const contactForm = document.querySelector('#contact form');

if(contactForm){
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent successfully!');
        contactForm.reset();
    });
}

// Product Click
const products = document.querySelectorAll('.product');

products.forEach(product => {
    product.addEventListener('click', () => {
        const productName = product.querySelector('h3').textContent;
        alert(`You selected: ${productName}`);
    });
});

const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering the product click event
        const product = button.closest('.product');
        const productName = product.querySelector('h3').textContent;
        alert(`${productName} added to cart!`);
    });
});