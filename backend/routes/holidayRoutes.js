const express = require('express');
const { holidayController } = require('../controllers');
const authenticateToken = require('../middlewares/auth');
const router = express.Router();

// Admin login route
router.get('/', holidayController.list);
router.get('/:holidayId', holidayController.get)
router.post('/', authenticateToken, holidayController.add);
router.delete('/:id', authenticateToken, holidayController.remove)

module.exports = router;
