// ===================================
// UX ENHANCEMENTS JAVASCRIPT
// Back to Top Button & Reading Progress Bar
// ===================================

(function() {
    'use strict';
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        createProgressBar();
        createBackToTopButton();
        setupScrollHandlers();
    }
    
    // ===================================
    // READING PROGRESS BAR
    // ===================================
    function createProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        progressBar.setAttribute('role', 'progressbar');
        progressBar.setAttribute('aria-label', 'Reading progress');
        progressBar.setAttribute('aria-valuemin', '0');
        progressBar.setAttribute('aria-valuemax', '100');
        progressBar.setAttribute('aria-valuenow', '0');
        document.body.insertBefore(progressBar, document.body.firstChild);
        
        return progressBar;
    }
    
    function updateProgressBar() {
        const progressBar = document.querySelector('.reading-progress');
        if (!progressBar) return;
        
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const progress = (scrollTop / documentHeight) * 100;
        
        progressBar.style.width = progress + '%';
        progressBar.setAttribute('aria-valuenow', Math.round(progress));
    }
    
    // ===================================
    // BACK TO TOP BUTTON
    // ===================================
    function createBackToTopButton() {
        const button = document.createElement('button');
        button.className = 'back-to-top';
        button.setAttribute('aria-label', 'Back to top');
        button.setAttribute('title', 'Back to top');
        document.body.appendChild(button);
        
        button.addEventListener('click', scrollToTop);
        
        return button;
    }
    
    function toggleBackToTopButton() {
        const button = document.querySelector('.back-to-top');
        if (!button) return;
        
        const scrollThreshold = 300; // Show button after scrolling 300px
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > scrollThreshold) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    }
    
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // ===================================
    // SCROLL EVENT HANDLERS
    // ===================================
    function setupScrollHandlers() {
        let ticking = false;
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    updateProgressBar();
                    toggleBackToTopButton();
                    ticking = false;
                });
                ticking = true;
            }
        });
        
        // Initial check
        updateProgressBar();
        toggleBackToTopButton();
    }
    
    // ===================================
    // KEYBOARD ACCESSIBILITY
    // ===================================
    // Allow ESC key to hide back-to-top button when focused
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const button = document.querySelector('.back-to-top');
            if (button && document.activeElement === button) {
                button.blur();
            }
        }
    });
    
})();
