// Navigation Smooth Scroll
document.querySelectorAll('.main-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if(this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const section = document.querySelector(targetId);
            
            if(section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL hash without jumping
                history.pushState(null, null, targetId);
            }
        }
    });
});

//to handle direct anchor links on page load
window.addEventListener('load', () => {
    if(window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if(target) {
            target.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    }
});

// Scroll Animations
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.2 }
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => {
        observer.observe(el);
    });
});

// Sticky Navigation
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

// Card Hover Effects
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
    });
});

// Explore Button
document.querySelector('.explore-button').addEventListener('click', () => {
    alert('Thank you for supporting sustainability!');
});

// Service Box Hover Effects
document.querySelectorAll('.service-box').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Contact Button Animation
document.querySelector('.contact-btn').addEventListener('click', (e) => {
    e.target.style.transform = 'scale(0.95)';
    setTimeout(() => {
        e.target.style.transform = 'scale(1)';
    }, 100);
});

/* Team Box Interactions
document.querySelectorAll('.team-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'translateY(-10px)';
        box.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
    });
    
    box.addEventListener('mouseleave', () => {
        box.style.transform = 'translateY(0)';
        box.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
    });
});

// Team Section Scroll Animations
const teamObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});*/

//our partners
document.querySelectorAll('.team-box').forEach((box) => {
    box.style.opacity = 0;
    box.style.transform = 'translateY(50px)';
    box.style.transition = 'all 0.5s ease-out';
    teamObserver.observe(box);
});

document.querySelectorAll('.column').forEach(column => {
    column.addEventListener('mouseenter', () => {
        column.style.backgroundColor = '#111';
    });
    
    column.addEventListener('mouseleave', () => {
        column.style.backgroundColor = 'transparent';
    });
});

document.querySelector('.email-link').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'mailto:support@W2W.com';
});