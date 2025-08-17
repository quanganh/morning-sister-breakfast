// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(217, 119, 6, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(217, 119, 6, 0.1)';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for dish card animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe dish cards
document.addEventListener('DOMContentLoaded', () => {
    const dishCards = document.querySelectorAll('.dish-card, .dish-card-large');
    dishCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Button hover effects
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Vietnamese text animation
document.addEventListener('DOMContentLoaded', () => {
    const vietnameseText = document.querySelector('.hero h1');
    if (vietnameseText) {
        vietnameseText.style.opacity = '0';
        vietnameseText.style.transform = 'translateY(30px)';

        setTimeout(() => {
            vietnameseText.style.transition = 'opacity 1s ease, transform 1s ease';
            vietnameseText.style.opacity = '1';
            vietnameseText.style.transform = 'translateY(0)';
        }, 500);
    }
});

// Floating image effect
document.addEventListener('DOMContentLoaded', () => {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        let floatY = 0;
        let floatDirection = 1;

        function float() {
            floatY += 0.02 * floatDirection;
            if (floatY > 1) floatDirection = -1;
            if (floatY < -1) floatDirection = 1;

            heroImage.style.transform = `translateY(${floatY * 5}px)`;
            requestAnimationFrame(float);
        }

        float();
    }
});

// Scroll-triggered animations
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, {
    threshold: 0.1
});

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.culture-feature, .feature');
    animatedElements.forEach(el => {
        scrollObserver.observe(el);
    });
});

// Tag color transitions
document.addEventListener('DOMContentLoaded', () => {
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.background = 'var(--primary-orange)';
            tag.style.color = 'var(--white)';
            tag.style.transform = 'scale(1.1)';
        });

        tag.addEventListener('mouseleave', () => {
            tag.style.background = 'var(--accent-cream)';
            tag.style.color = 'var(--primary-orange)';
            tag.style.transform = 'scale(1)';
        });
    });
});

// Image Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeBtn = document.querySelector('.close');

    // Function to open modal
    function openModal(imageSrc, title, description) {
        modalImg.src = imageSrc;
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside the modal content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Add click event listeners to dish images on index page
    const dishImages = document.querySelectorAll('.dish-img');
    dishImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            const dishCard = img.closest('.dish-card');
            const title = dishCard.querySelector('h3').textContent;
            const description = dishCard.querySelector('p').textContent;
            openModal(img.src, title, description);
        });
    });
});
