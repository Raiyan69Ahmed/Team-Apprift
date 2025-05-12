document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulated authentication (In a real app, you'd check against a database or API)
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
        window.location.href = 'home.html';  // Redirect to the home page after login
    } else {
        alert('Invalid username or password.');
    }
});
