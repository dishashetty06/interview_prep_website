document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    let messageElement = document.getElementById('message');

    if (password !== confirmPassword) {
        messageElement.textContent = 'Passwords do not match!';
        return;
    }

    
    messageElement.textContent = 'Registration successful!';
    messageElement.style.color = 'green';
    this.reset();
});
