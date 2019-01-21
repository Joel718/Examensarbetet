var express = require('express');
var router = express.Router();
var Product = require('../mongoose_schema/products');


// GET home page. Renderar startsidan 
router.get('/', function(req, res, next) {
  res.render('main-page/startpage');
});

// Renderar produktsidan
router.get('/product-page/index', function(req, res, next) {
  Product.find(function(err, docs) {
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize){
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('product-page/index', { products: productChunks });
  });
});

// GET request startpage
router.get('/main-page/startpage', function(req, res, next) {
  res.render('main-page/startpage');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;