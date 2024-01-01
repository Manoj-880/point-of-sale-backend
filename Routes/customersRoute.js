const express = require('express');
const router = express.Router();
const customerController = require('../Controllers/customerController');
const { route } = require('./productRoutes');

router.get('/', customerController.getAll);
router.post('/add', customerController.create);
router.put('/update/:id', customerController.update);

module.exports = router;