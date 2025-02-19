/*document.addEventListener(`DOMContentLoaded`, () => {
    document.querySelectorAll('.gallery-image').forEach(image => {
        image.addEventListener('click', () => {
            const description = image.getAttribute('data-description');
            const descriptionElement = image.closest('.service').querySelector('.image-description');
            descriptionElement.textContent = description;
        });
    });
});










document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Merci ${name}, votre message a bien été envoyé !`);

        contactForm.reset();
    });
});

document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
    });*/



