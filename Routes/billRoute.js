const express = require('express');
const router = express.Router();
const billController = require('../Controllers/billController');

router.get('/', billController.getAll);
router.post('/add', billController.add);
router.get('/getbyid/:id', billController.getByCustId);

module.exports = router;