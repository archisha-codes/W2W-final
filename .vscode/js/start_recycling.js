document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.querySelector('.contact-btn');
    
    contactBtn.addEventListener('click', () => {
        // Add smooth click animation
        contactBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            contactBtn.style.transform = 'scale(1)';
        }, 100);
        
        // Add your contact logic here
        console.log('Contact button clicked!');
        // window.location.href = 'mailto:contact@example.com';
    });
});