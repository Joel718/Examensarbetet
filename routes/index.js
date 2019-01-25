var express = require('express');
var router = express.Router(); // Anropar express
var Product = require('../mongoose_schema/products'); // Ansluter åtkomst till databasen

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

// Get request startpage
router.get('/main-page/startpage', function(req, res, next) {
  res.render('main-page/startpage');
});

// Get contact page
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

// Get form respons after succefully delivering a message
router.get('/success', function(req, res, next) {
  res.render('success');
});

module.exports = router;