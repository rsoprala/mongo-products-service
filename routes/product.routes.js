//Imports
var express = require('express');
var router = express.Router();
var productsController = require('../controllers/products.controller');

router.get('/products', productsController.getProducts);

module.exports = router;