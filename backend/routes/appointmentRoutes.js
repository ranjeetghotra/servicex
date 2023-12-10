const express = require('express');
const { appointmentController } = require('../controllers');

const router = express.Router();

// Admin login route
router.post('/', appointmentController.book);


module.exports = router;
