// Add hover effects to columns
document.querySelectorAll('.column').forEach(column => {
    column.addEventListener('mouseenter', () => {
        column.style.backgroundColor = '#111';
    });
    
    column.addEventListener('mouseleave', () => {
        column.style.backgroundColor = 'transparent';
    });
});

// Email link interaction
document.querySelector('.email-link').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'mailto:support@W2W.com';
});