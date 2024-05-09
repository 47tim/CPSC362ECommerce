const assert = require('assert');
const { addToCart, loadUserData, saveUserData } = require('../user_functions/user_functions');

describe('addToCart', function () {
    beforeEach(function () {
        // Reset users.json file to initial state before each test
        const initialUserData = { users: [] };
        saveUserData(initialUserData);
    });

    it('should add an item to the user\'s cart successfully', function () {
        // Register a user
        addToCart('john_doe', { productId: '123', productName: 'Example Product', quantity: 1, price: 10.99 });

        // Load user data and check if the item is added to the cart
        const userData = loadUserData();
        const user = userData.users.find(user => user.username === 'john_doe');
        assert.strictEqual(user.cart.length, 1);
        assert.deepStrictEqual(user.cart[0], { productId: '123', productName: 'Example Product', quantity: 1, price: 10.99 });
    });

    it('should create a new user with an empty cart if user is not found and no items are passed', function () {
        // Attempt to add item to cart for non-existing user with no items
        const result = addToCart('nonexistent_user', undefined);
        
        // Load user data and check if the user is created with an empty cart
        const userData = loadUserData();
        const user = userData.users.find(user => user.username === 'nonexistent_user');
        assert.strictEqual(result.success, true);
        assert.strictEqual(result.message, "Item added to cart successfully");
        assert.ok(user);
        assert.deepStrictEqual(user.cart, []);
    });

    it('should add multiple items to the user\'s cart', function () {
        // Register a user
        addToCart('john_doe', { productId: '123', productName: 'Product 1', quantity: 2, price: 20.99 });
        addToCart('john_doe', { productId: '456', productName: 'Product 2', quantity: 1, price: 15.99 });

        // Load user data and check if the items are added to the cart
        const userData = loadUserData();
        const user = userData.users.find(user => user.username === 'john_doe');
        assert.strictEqual(user.cart.length, 2);
        assert.deepStrictEqual(user.cart[0], { productId: '123', productName: 'Product 1', quantity: 2, price: 20.99 });
        assert.deepStrictEqual(user.cart[1], { productId: '456', productName: 'Product 2', quantity: 1, price: 15.99 });
    });
});
