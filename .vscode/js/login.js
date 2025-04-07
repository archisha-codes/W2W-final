document.addEventListener('DOMContentLoaded', () => {
    // Form elements
    const loginForm = document.getElementById('loginForm');
    const loginBtn = document.querySelector('.login-btn');
    // Add to existing DOMContentLoaded listener

    // Social buttons
    const googleBtn = document.querySelector('.google-btn');
    const facebookBtn = document.querySelector('.facebook-btn');
    
    // Links
    const forgotPassword = document.querySelector('.forgot-password');
    const signupLink = document.querySelector('.signup-link');
    
    //-------------------------------------------------------------------------------
    
    document.querySelector('.signup-link').addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'signup.html';
    });
    //------------------------------------------
    // Form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show loading state
        loginBtn.innerHTML = '<div class="loader"></div>';
        loginBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            // Reset button
            loginBtn.innerHTML = 'Log In';
            loginBtn.disabled = false;
            
            // Show success message
            showMessage('Login successful! Redirecting...', 'success');
            
            // Redirect after delay
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1500);
        }, 2000);
    });

    // Social login handlers
    googleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showMessage('Redirecting to Google login...', 'info');
    });

    facebookBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showMessage('Redirecting to Facebook login...', 'info');
    });

    // Forgot password handler
    forgotPassword.addEventListener('click', (e) => {
        e.preventDefault();
        const email = prompt('Please enter your email address:');
        if(email) {
            showMessage(`Password reset link sent to ${email}`, 'success');
        }
    });

    // Message display function
    function showMessage(text, type) {
        const existingMessage = document.querySelector('.message');
        if(existingMessage) existingMessage.remove();

        const message = document.createElement('div');
        message.className = `message ${type}`;
        message.textContent = text;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 3000);
    }

    // Initial animation
    gsap.from('.login-box', {
        duration: 0.8,
        x: 100,
        opacity: 0,
        ease: "power2.out"
    });
});