// Add hover effect to team boxes
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

// Add scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.team-box').forEach((box) => {
    box.style.opacity = 0;
    box.style.transform = 'translateY(50px)';
    box.style.transition = 'all 0.5s ease-out';
    observer.observe(box);
});