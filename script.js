/**
 * SCRIPT.JS
 * Handles general interactivity for the website.
 * - Mobile navigation (hamburger menu)
 * - Active navigation link highlighting
 * - Dark/Light theme switching and persistence
 * - Reveal elements on scroll animation
 */
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.querySelector('body');

    // Toggle mobile navigation menu
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.classList.toggle('noscroll'); // Prevents scrolling when menu is open
    }

    if (hamburger) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Highlight the active navigation link based on the current page
    const currentLocation = window.location.pathname.split("/").pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        const itemHref = item.getAttribute('href').split("/").pop();
        if (itemHref === currentLocation) {
            item.classList.add('active');
        }
    });

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle-checkbox');
    const applyStoredTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            if (themeToggle) themeToggle.checked = true;
        } else {
            document.body.classList.remove('dark-mode');
            if (themeToggle) themeToggle.checked = false;
        }
    };

    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    applyStoredTheme();

    // Reveal elements on scroll using Intersection Observer API
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after it becomes visible
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});

/**
 * Immediately-Invoked Function Expression (IIFE) to apply the dark mode
 * class as soon as possible, preventing a "flash of unthemed content" (FOUC)
 * on page load if the user has selected the dark theme.
 */
(function() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark-mode');
        document.body.classList.add('dark-mode');
    }
})();