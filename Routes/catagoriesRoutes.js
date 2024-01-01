const express = require('express');
const router = express.Router();
const catagorieController = require('../Controllers/catagoriesController');

router.get('/', catagorieController.getAll);
router.post('/add', catagorieController.create);

module.exports = router;