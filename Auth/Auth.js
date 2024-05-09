const fs = require('fs');
const path = require('path');

// Function to register a new user
function registerUser(username, email, password) {
    let userData = loadUserData();

    const userExists = userData.users.some(user => user.username === username || user.email === email);
    if (userExists) {
        return { success: false, message: "Username or email already exists" };
    }

    userData.users.push({ username, email, password });

    saveUserData(userData);

    return { success: true, message: "User registered successfully" };
}

// Function to authenticate user login
function loginUser(username, password) {
    let userData = loadUserData();

    const user = userData.users.find(user => user.username === username);

    if (!user) {
        return { success: false, message: "User not found" };
    }

    if (user.password !== password) {
        return { success: false, message: "Incorrect password" };
    }

    return { success: true, message: "Login successful" };
}

// Function to load user data from JSON file
function loadUserData() {
    const filePath = path.join(__dirname, 'users.json');
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return { users: [] };
    }
}

// Function to save user data to JSON file
function saveUserData(userData) {
    const filePath = path.join(__dirname, 'users.json');
    fs.writeFileSync(filePath, JSON.stringify(userData, null, 4));
}

// Example usage
// registerUser('john_doe', 'john@example.com', 'password123');
// const loginResult = loginUser('john_doe', 'password123');
// console.log(loginResult);

module.exports = { registerUser, loginUser, loadUserData, saveUserData };
