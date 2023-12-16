const express = require('express');
const { contactController } = require('../controllers');

const router = express.Router();

// Admin login route
router.get('/', contactController.list);
router.post('/', contactController.add);
router.get('/count',contactController.count);
module.exports = router;
