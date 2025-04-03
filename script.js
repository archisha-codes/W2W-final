// Smooth scrolling for navigation links
document.querySelectorAll('.main-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if(this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show"); // Add class when in view
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => {
        observer.observe(el);
    });
});


// Sticky navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.main-nav');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
        nav.style.backgroundColor = 'rgba(150, 255, 4, 0.95)';
        nav.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    } else {
        nav.style.backgroundColor = '#96FF04';
        nav.style.boxShadow = 'none';
    }
});



document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
        });
    });

    // Button interaction
    const exploreButton = document.querySelector('.explore-button');
    exploreButton.addEventListener('click', () => {
        alert('Thank you for supporting sustainability!');
    });
});