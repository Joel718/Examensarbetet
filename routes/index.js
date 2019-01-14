// Anropar express
var express = require('express');

// Tex: router.get('/account/create-account', function(req, res, next)
var router = express.Router();

// Hämtar schema från products.js
var Product = require('../mongoose_schema/products');

// Ett API som Validerar requests. 
// Kontroll om vad som händer vid "success" eller "fail"
var passport = require('passport');

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

// GET create-account page
router.get('/account/create-account', function(req, res, next) {
  res.render('account/create-account');
});

// POST form, return response message based on true/false sucess result.
router.post('/account/create-account', passport.authenticate('local.signup', {
  successRedirect: '/account/my-account',
  failureRedirect: '/account/create-account',
  failureFlash: true
}));

// GET request my-account page
router.get('/account/my-account', function(req, res, next) {
  res.render('account/my-account');
});

// GET request startpage
router.get('/main-page/startpage', function(req, res, next) {
  res.render('main-page/startpage');
});

module.exports = router;