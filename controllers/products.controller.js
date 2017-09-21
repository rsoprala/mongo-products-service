var Product = require('../models/product.model');

exports.getProducts = function (req, res) {
  var products = Product.find();
  products.exec(function (err, results) {
    res.send(results);
  })
};