document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    //----------------------------------
    // Add to existing DOMContentLoaded listener
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
    window.location.href = 'login.html'; // After successful signup
});
//--------------------------------------------------
    // Basic validation
    if (fullName && email && password) {
        // Add your signup logic here
        alert('Signup successful!');
        this.reset();
    } else {
        alert('Please fill in all fields');
    }
});

// Social button handlers
document.querySelector('.google-btn').addEventListener('click', () => {
    alert('Google signup clicked');
});

document.querySelector('.facebook-btn').addEventListener('click', () => {
    alert('Facebook signup clicked');
});