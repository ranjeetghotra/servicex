const express = require('express');
const { contactController } = require('../controllers');
const authenticateToken = require('../middlewares/auth');

const router = express.Router();

// Admin login route
router.get('/', authenticateToken, contactController.list);
router.post('/', contactController.add);
// router.get('/count',contactController.count);
module.exports = router;
