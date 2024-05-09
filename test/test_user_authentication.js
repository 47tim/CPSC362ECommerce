const assert = require('assert');
const { registerUser, loadUserData, saveUserData, loginUser } = require('../Auth/auth'); // Replace './your-module' with the path to your module

describe('User Authentication', function () {
    beforeEach(function () {
        // Reset users.json file to initial state before each test
        const initialUserData = { users: [] };
        saveUserData(initialUserData);
    });

    describe('registerUser', function () {
        it('should register a new user successfully', function () {
            const result = registerUser('john_doe', 'john@example.com', 'password123');
            assert.strictEqual(result.success, true);
            assert.strictEqual(result.message, "User registered successfully");
        });

        it('should prevent registering a user with existing username', function () {
            // Register a user with a specific username
            registerUser('john_doe', 'john@example.com', 'password123');

            // Attempt to register another user with the same username
            const result = registerUser('john_doe', 'another@example.com', 'password456');
            assert.strictEqual(result.success, false);
            assert.strictEqual(result.message, "Username or email already exists");
        });

        it('should prevent registering a user with existing email', function () {
            // Register a user with a specific email
            registerUser('john_doe', 'john@example.com', 'password123');

            // Attempt to register another user with the same email
            const result = registerUser('another_user', 'john@example.com', 'password456');
            assert.strictEqual(result.success, false);
            assert.strictEqual(result.message, "Username or email already exists");
        });

        it('should prevent registering a user with missing username, email, or password', function () {
        // Attempt to register a user with missing username
        let result = registerUser('', 'test@example.com', 'password123');
        assert.strictEqual(result.success, false);

        // Attempt to register a user with missing email
        result = registerUser('test_user', '', 'password123');
        assert.strictEqual(result.success, false);

        // Attempt to register a user with missing password
        result = registerUser('test_user', 'test@example.com', '');
        assert.strictEqual(result.success, false);
        });
    });

    describe('loginUser', function () {
        it('should login a registered user with correct credentials', function () {
            // Register a user
            registerUser('john_doe', 'john@example.com', 'password123');

            // Attempt to login with correct credentials
            const result = loginUser('john_doe', 'password123');
            assert.strictEqual(result.success, true);
            assert.strictEqual(result.message, "Login successful");
        });

        it('should reject login with incorrect password', function () {
            // Register a user
            registerUser('john_doe', 'john@example.com', 'password123');

            // Attempt to login with incorrect password
            const result = loginUser('john_doe', 'wrongpassword');
            assert.strictEqual(result.success, false);
            assert.strictEqual(result.message, "Incorrect password");
        });

        it('should reject login with non-existing username', function () {
            // Attempt to login with non-existing username
            const result = loginUser('nonexistent_user', 'password123');
            assert.strictEqual(result.success, false);
            assert.strictEqual(result.message, "User not found");
        });
    });
});
