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
