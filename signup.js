// Define an object to store user data
const users = {};

// Function to create a new user account
function createUser(email, password) {
    if (users[email]) {
        return "User already exists.";
    } else {
        users[email] = password;
        return "User account created successfully.";
    }
}

// Function to authenticate a user
function signIn(email, password) {
    if (users[email] && users[email] === password) {
        return "Sign in successful.";
    } else {
        return "Invalid email or password.";
    }
}

// Example usage
console.log(createUser("user@example.com", "password123")); // User account created successfully.
console.log(createUser("user@example.com", "password456")); // User already exists.

console.log(signIn("user@example.com", "password123")); // Sign in successful.
console.log(signIn("user@example.com", "wrongpassword")); // Invalid email or password.

const express = require('express');
const app = express();
const port = 5001;

app.get('/signup.html', (req, res) => {
    res.sendFile('pages/signup', {root: __dirname});
});

app.listen(port, () => { 
    console.log(`Now listening on port ${port}`); 
});
