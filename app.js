//Imports
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var productRoutes = require('./routes/product.routes');
var cors = require('cors');

//Mongoose
mongoose.connect("mongodb://coderacer:coderacer@ds141524.mlab.com:41524/coderacer-db", { useMongoClient: true});
mongoose.set('debug', true);

//Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use('/api', productRoutes);

//Server
app.listen(3000);
console.log("api is running on http://localhost:3000");