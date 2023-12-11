const express = require('express');
const { appointmentController } = require('../controllers');

const router = express.Router();

// Admin login route
router.post('/', appointmentController.book);
router.put('/',appointmentController.updateStatus)
router.get('/',appointmentController.list);

module.exports = router;
