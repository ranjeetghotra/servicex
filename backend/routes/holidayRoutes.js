const express = require('express');
const { holidayController } = require('../controllers');
const router = express.Router();

// Admin login route
router.get('/', holidayController.list);
router.get('/:holidayId',holidayController.get)
router.post('/', holidayController.add);
router.delete('/:id',holidayController.remove)

module.exports = router;
