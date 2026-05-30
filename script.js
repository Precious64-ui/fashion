// =========================
// MOBILE MENU
// =========================
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    console.log("Menu clicked");
    navLinks.classList.toggle('active');
});

// =========================
// CLOSE MENU WHEN LINK IS CLICKED
// =========================
const navLinksItems = document.querySelectorAll('.nav-links a');

navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks?.classList.remove('active');
        authLinks?.classList.remove('active');
    });
});

// =========================
// NEWSLETTER FORM
// =========================
const newsletterForm = document.querySelector('.newsletter form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();

        alert('Thank you for subscribing!');

        newsletterForm.reset();
    });
}

// =========================
// CONTACT FORM
// =========================
const contactForm = document.querySelector('#contact form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        alert('Message sent successfully!');

        contactForm.reset();
    });
}

// =========================
// PRODUCT CARD CLICK
// =========================
const products = document.querySelectorAll('.product');

products.forEach(product => {
    product.addEventListener('click', () => {

        const productName =
            product.querySelector('h3')?.textContent;

        alert(`You selected: ${productName}`);
    });
});

// =========================
// ADD TO CART BUTTON
// =========================
const addToCartButtons =
    document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {

    button.addEventListener('click', (e) => {

        e.stopPropagation();

        const product =
            button.closest('.product');

        const productName =
            product.querySelector('h3')?.textContent;

        alert(`${productName} added to cart!`);
    });

});

// =========================
// ACTIVE NAVIGATION ON SCROLL
// =========================
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinksItems.forEach(link => {

        link.classList.remove('active');

        if (
            link.getAttribute('href') ===
            `#${currentSection}`
        ) {
            link.classList.add('active');
        }
    });
});