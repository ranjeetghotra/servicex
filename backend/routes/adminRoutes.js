const express = require('express');
const { adminController, serviceController } = require('../controllers');

const router = express.Router();

// Admin login route
router.post('/login', adminController.signIn);
router.get('/dashboard', adminController.dashboard);
router.post('/service', serviceController.create);
router.get('/service', serviceController.list);
router.get('/service/count',serviceController.countTotal);
router.get('/service/:slug', serviceController.get);
router.get('/service/id/:id', serviceController.getById);
router.put('/service/:id', serviceController.update);
router.delete('/service/:id', serviceController.remove);

module.exports = router;
