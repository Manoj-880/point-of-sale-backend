const express = require('express');
const router = express.Router();
const productController = require('../Controllers/productController');

router.get('/', productController.getAll);
router.post('/add', productController.create);
router.put('/update/:id', productController.update);
router.delete('/delete/:id', productController.remove);

module.exports = router;