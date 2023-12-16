const express = require('express');
const { adminController, serviceController } = require('../controllers');

const router = express.Router();

// Admin login route
router.post('/login', adminController.signIn);
router.post('/service', serviceController.create);
router.get('/service', serviceController.list);
router.get('/service/count',serviceController.countTotal);
router.get('/service/:id', serviceController.get);
router.put('/service/:id', serviceController.update);
router.delete('/service/:id', serviceController.remove);

module.exports = router;
