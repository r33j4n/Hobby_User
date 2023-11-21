
const express = require('express');
const UserController = require('../controllers/usercontroller');

const router = express.Router();
const userController = new UserController();

// Route for user login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  try {
    const loggedInUser = userController.login(username, password);
    res.status(200).json(loggedInUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route for getting all users
router.get('/users', (req, res) => {
  const users = userController.getAllUsers();
  res.status(200).json(users);
});

// Route for getting users with filter
router.get('/users/filter', (req, res) => {
  const { filter } = req.query;
  const filteredUsers = userController.getUsers(filter);
  res.status(200).json(filteredUsers);
});

// Route for adding a contact number to a user
router.post('/users/:userId/contact', (req, res) => {
  const { userId } = req.params;
  const { contactNumber, contactName } = req.body;
  try {
    userController.addContactNumber(userId, contactNumber, contactName);
    res.status(200).json({ message: 'Contact number added successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route for adding a hobby to a user
router.post('/users/:userId/hobby', (req, res) => {
  const { userId } = req.params;
  const { hobby } = req.body;
  try {
    userController.addHobby(userId, hobby);
    res.status(200).json({ message: 'Hobby added successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route for saving changes to a user
router.put('/users/:userId', (req, res) => {
  const { userId } = req.params;
  const { email, name } = req.body;
  const userDetails = { email, name };
  try {
    userController.saveChanges(userId, userDetails);
    res.status(200).json({ message: 'Changes saved successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route for checking if a user is allowed to login
router.get('/users/:userId/allow-login', (req, res) => {
  const { userId } = req.params;
  const allowed = userController.allowLogin(userId);
  res.status(200).json({ allowed });
});

// Route for adding a new user
router.post('/users', (req, res) => {
  const { email, name } = req.body;
  const userDetails = { email, name };
  try {
    userController.addUser(userDetails);
    res.status(200).json({ message: 'User added successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
