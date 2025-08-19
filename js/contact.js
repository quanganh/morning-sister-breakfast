// EmailJS Configuration
const EMAILJS_CONFIG = {
    PUBLIC_KEY: "ALEpOL83gXDAkCXMo",
    SERVICE_ID: "service_v99irl8",
    TEMPLATE_ID: "template_lrddx3i",
    TO_EMAIL: "themorningsisterbreakfast@gmail.com"
};

// Initialize EmailJS when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS with your public key
    console.log(EMAILJS_CONFIG.PUBLIC_KEY);
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
});

// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.fa-chevron-down');

        // Initially hide all answers
        answer.style.display = 'none';

        question.addEventListener('click', () => {
            const isOpen = answer.style.display === 'block';

            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                const otherIcon = otherItem.querySelector('.fa-chevron-down');
                if (otherItem !== item) {
                    otherAnswer.style.display = 'none';
                    otherIcon.style.transform = 'rotate(0deg)';
                }
            });

            // Toggle current item
            if (isOpen) {
                answer.style.display = 'none';
                icon.style.transform = 'rotate(0deg)';
            } else {
                answer.style.display = 'block';
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    // Add smooth animation to FAQ answers
    faqItems.forEach(item => {
        const answer = item.querySelector('.faq-answer');
        answer.style.transition = 'all 0.3s ease';
    });
});

// Contact Form Validation
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea, select');

        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                validateField(input);
            });

            input.addEventListener('input', () => {
                clearFieldError(input);
            });
        });

        // Form submission
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (validateForm()) {
                submitForm();
            }
        });
    }
});

// Field validation function
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    // Remove existing error styling
    clearFieldError(field);

    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    }

    // Email validation
    if (field.type === 'email' && value && !isValidEmail(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
    }

    // Phone validation (basic)
    if (field.type === 'tel' && value && !isValidPhone(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid phone number';
    }

    // Show error if validation failed
    if (!isValid) {
        showFieldError(field, errorMessage);
    }

    return isValid;
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation helper
function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

// Show field error
function showFieldError(field, message) {
    field.classList.add('error');

    // Create error message element
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = '#dc2626';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '0.25rem';

    // Insert error message after the field
    field.parentNode.appendChild(errorElement);
}

// Clear field error
function clearFieldError(field) {
    field.classList.remove('error');

    // Remove error message
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// Form validation
function validateForm() {
    const fields = document.querySelectorAll('#contact-form input[required], #contact-form textarea[required]');
    let isValid = true;

    fields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });

    return isValid;
}

// Form submission
function submitForm() {
    const form = document.getElementById('contact-form');
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Send email using EmailJS
    console.log(EMAILJS_CONFIG.SERVICE_ID);
    emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        subject: formData.subject,
        message: formData.message
    })
    .then(function(response) {
        console.log("SUCCESS", response);
        // Show success message
        showSuccessMessage();
        // Reset form
        form.reset();
    })
    .catch(function(error) {
        console.log("FAILED", error);
        // Show error message
        showErrorMessage();
    })
    .finally(function() {
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}

// Show success message
function showSuccessMessage() {
    const form = document.getElementById('contact-form');

    // Create success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <i class="fas fa-check-circle"></i>
        Thank you! Your message has been sent successfully. We'll get back to you soon.
    `;

    // Insert success message after the form
    form.parentNode.appendChild(successMessage);

    // Remove success message after 5 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
}

// Show error message
function showErrorMessage() {
    const form = document.getElementById('contact-form');

    // Create error message
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        Failed to send message. Please try again later.
    `;

    // Insert error message after the form
    form.parentNode.appendChild(errorMessage);

    // Remove error message after 5 seconds
    setTimeout(() => {
        errorMessage.remove();
    }, 5000);
}

// Interactive Contact Cards
document.addEventListener('DOMContentLoaded', () => {
    const contactCards = document.querySelectorAll('.contact-card');

    contactCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});
