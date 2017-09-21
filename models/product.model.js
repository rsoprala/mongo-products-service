var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productsSchema = new Schema({
  "productId": Number,
  "productName": String,
  "productCode": String,
  "releaseDate": String,
  "description": String,
  "price": Number,
  "starRating": Number,
  "imageUrl": String
})

module.exports = mongoose.model('Product', productsSchema, 'Products');