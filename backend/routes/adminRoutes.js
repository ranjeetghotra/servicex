const express = require('express');
const { adminController, serviceController } = require('../controllers');

const router = express.Router();

// Admin login route
router.post('/login', adminController.signIn);
router.post('/service', serviceController.create);

module.exports = router;
