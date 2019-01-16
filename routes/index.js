var express = require('express');
var router = express.Router();
var Cart = require('../mongoose_schema/shopping_cart');
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

// See shopping_cart.js
router.get('/add-to-cart/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, function(err, product) {
    if(err) {
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/');
  });
});

module.exports = router;