const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

// Admin login route
router.post('/login', userController.signIn);
router.post('/register', userController.signUp);

module.exports = router;
