// Hamburger Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav, nav.navbar');
    const overlay = document.querySelector('.nav-overlay');
    const navLinks = document.querySelectorAll('nav a, nav.navbar a');
    
    // Toggle menu when hamburger is clicked
    if (hamburger && nav) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
            if (overlay) {
                overlay.classList.toggle('active');
            }
        });
    }
    
    // Close menu when overlay is clicked
    if (overlay) {
        overlay.addEventListener('click', function() {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
    
    // Close menu when a nav link is clicked
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            if (overlay) {
                overlay.classList.remove('active');
            }
        });
    });
    
    // Close menu on window resize if switching to desktop view
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            if (overlay) {
                overlay.classList.remove('active');
            }
        }
    });
});