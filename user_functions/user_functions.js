const fs = require('fs');
const path = require('path');

// Function to add an item to the user's cart
function addToCart(username, item) {
    // Load existing user data if any
    let userData = loadUserData();

    // Find the user with the provided username or create a new user if not found
    let user = userData.users.find(user => user.username === username);

    // If user doesn't exist, create a new user with an empty cart
    if (!user) {
        user = { username, cart: [] };
        userData.users.push(user);
    }

    // Initialize the user's cart if it doesn't exist
    user.cart = user.cart || [];

    // Add the item to the user's cart
    user.cart.push(item);

    // Save updated user data
    saveUserData(userData);

    return { success: true, message: "Item added to cart successfully" };
}

// Function to load user data from JSON file
function loadUserData() {
    const filePath = path.join(__dirname, 'users.json');
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        // If file doesn't exist, return empty data
        return { users: [] };
    }
}

// Function to save user data to JSON file
function saveUserData(userData) {
    const filePath = path.join(__dirname, 'users.json');
    fs.writeFileSync(filePath, JSON.stringify(userData, null, 4));
}

// Example usage
addToCart('john_doe', { productId: '123', productName: 'Example Product', quantity: 1, price: 10.99 });

module.exports = { addToCart, loadUserData, saveUserData }

