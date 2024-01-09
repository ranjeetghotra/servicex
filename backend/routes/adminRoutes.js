const express = require('express');
const { adminController, serviceController } = require('../controllers');
const authenticateToken = require('../middlewares/auth');

const router = express.Router();

// Admin login route
router.post('/login', adminController.signIn);
router.get('/dashboard', authenticateToken, adminController.dashboard);
router.post('/service', authenticateToken, serviceController.create);
router.get('/service', serviceController.list);
// router.get('/service/count',serviceController.countTotal);
router.get('/service/:slug', serviceController.get);
router.get('/service/id/:id', serviceController.getById);
router.put('/service/:id', authenticateToken, serviceController.update);
router.put('/service/onCarousel/:id', authenticateToken, serviceController.updateCarousel);
router.delete('/service/:id', authenticateToken, serviceController.remove);
module.exports = router;
