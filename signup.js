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

