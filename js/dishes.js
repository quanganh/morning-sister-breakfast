// Dish Category Tab Switching
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const categoryContents = document.querySelectorAll('.category-content');

    function switchCategory(categoryName) {
        // Hide all category contents
        categoryContents.forEach(content => {
            content.classList.remove('active');
        });

        // Remove active class from all buttons
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Show selected category content
        const targetContent = document.getElementById(categoryName);
        if (targetContent) {
            targetContent.classList.add('active');
        }

        // Add active class to clicked button
        const activeButton = document.querySelector(`[data-category="${categoryName}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }

    // Add click event listeners to tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            switchCategory(category);
        });
    });

    // Initialize with main-dishes category
    switchCategory('main-dishes');
});

// Dish Card Animations
document.addEventListener('DOMContentLoaded', () => {
    const dishCards = document.querySelectorAll('.dish-card-large');

    const dishObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    dishCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        dishObserver.observe(card);
    });
});

// Interactive Dish Details
document.addEventListener('DOMContentLoaded', () => {
    const detailItems = document.querySelectorAll('.detail-item');

    detailItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(5px)';
            item.style.color = '#d97706';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
            item.style.color = '';
        });
    });
});

// Interactive Dish Tags
document.addEventListener('DOMContentLoaded', () => {
    const dishTags = document.querySelectorAll('.dish-tags .tag');

    dishTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.background = '#d97706';
            tag.style.color = '#ffffff';
            tag.style.transform = 'scale(1.1)';
        });

        tag.addEventListener('mouseleave', () => {
            tag.style.background = '#fef3c7';
            tag.style.color = '#d97706';
            tag.style.transform = 'scale(1)';
        });
    });
});

// Image Modal Functionality for Dishes Page
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

    // Add click event listeners to dish images on dishes page
    const dishImages = document.querySelectorAll('.dish-img-large');
    dishImages.forEach((img) => {
        img.addEventListener('click', () => {
            const dishCard = img.closest('.dish-card-large');
            const title = dishCard.querySelector('h3').textContent;
            const description = dishCard.querySelector('.dish-description').textContent;
            openModal(img.src, title, description);
        });
    });
});



// Smooth Category Transitions
function switchCategory(categoryName) {
    const activeContent = document.querySelector('.category-content.active');
    const targetContent = document.getElementById(categoryName);

    if (activeContent && targetContent && activeContent !== targetContent) {
        // Fade out current content
        activeContent.style.opacity = '0';
        activeContent.style.transform = 'translateY(20px)';

        setTimeout(() => {
            // Hide current content
            activeContent.classList.remove('active');

            // Show target content
            targetContent.classList.add('active');
            targetContent.style.opacity = '0';
            targetContent.style.transform = 'translateY(20px)';

            // Fade in target content
            setTimeout(() => {
                targetContent.style.opacity = '1';
                targetContent.style.transform = 'translateY(0)';
            }, 50);
        }, 300);
    }
}
