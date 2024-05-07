const { expect } = require('chai');
const sinon = require('sinon');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./User'); // Import your User model
const { login } = require('./yourLoginFunction'); // Import your login function

describe('Login Function', () => {
  let req, res, next;

  beforeEach(() => {
    req = {
      body: {
        username: 'testUser',
        password: 'testPassword'
      }
    };
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    };
    next = sinon.stub();
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should return 400 if username or password is missing', async () => {
    req.body = {}; // missing username and password
    await login(req, res, next);
    expect(res.status.calledWith(400)).to.be.true;
    expect(res.json.calledWith({ message: "Username or Password not present" })).to.be.true;
  });

  it('should return 400 if user is not found', async () => {
    sinon.stub(User, 'findOne').returns(null); // Simulate user not found
    await login(req, res, next);
    expect(res.status.calledWith(400)).to.be.true;
    expect(res.json.calledWith({ message: "Login not successful", error: "User not found" })).to.be.true;
  });

  it('should return 201 and set jwt cookie if login is successful', async () => {
    const user = { _id: 'userId', username: 'testUser', role: 'user', password: 'hashedPassword' };
    sinon.stub(User, 'findOne').returns(user); // Simulate user found
    sinon.stub(bcrypt, 'compare').resolves(true); // Simulate password comparison success
    sinon.stub(jwt, 'sign').returns('testToken'); // Simulate token creation

    const expectedToken = 'testToken';
    const maxAge = 3 * 60 * 60;

    await login(req, res, next);
    expect(res.cookie.calledWith("jwt", expectedToken, { httpOnly: true, maxAge: maxAge * 1000 })).to.be.true;
    expect(res.status.calledWith(201)).to.be.true;
    expect(res.json.calledWith({ message: "User successfully Logged in", user: 'userId' })).to.be.true;
  });
});
