const express = require('express');
const { appointmentController } = require('../controllers');
const authenticateToken = require('../middlewares/auth');

const router = express.Router();

// Admin login route
router.post('/', appointmentController.book);
router.put('/', authenticateToken, appointmentController.updateStatus)
router.get('/', appointmentController.list);
router.get('/:id', appointmentController.get);
router.put('/:id', authenticateToken, appointmentController.update);
// router.get('/countRequested',appointmentController.countRequested);

module.exports = router;
