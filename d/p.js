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

    // Image carousel
    const galleries = document.querySelectorAll('.gallery');

    galleries.forEach(gallery => {
        const images = gallery.querySelectorAll('img');
        let currentIndex = 0;

        // Show the first image initially
        images[currentIndex].classList.add('active');

        setInterval(() => {
            images[currentIndex].classList.remove('active'); // Hide current image
            currentIndex = (currentIndex + 1) % images.length; // Move to the next image
            images[currentIndex].classList.add('active'); // Show next image
        }, 2000); // Change every 2 seconds
    });

    /*// Menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });*/
});