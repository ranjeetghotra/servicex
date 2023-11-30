const express = require('express');
const { adminController } = require('../controllers');

const router = express.Router();

// Admin login route
router.post('/login', adminController.signIn);

module.exports = router;
