// Anropar express
var express = require('express');

// Tex: router.get('/account/create-account', function(req, res, next)
var router = express.Router();

var Cart = require('../mongoose_schema/shopping_cart');

// Hämtar schema från products.js
var Product = require('../mongoose_schema/products');

var csrf = require('csurf');
var csrfProtection = csrf();
router.use(csrfProtection);

// Ett API som Validerar requests. 
// Kontroll om vad som händer vid "success" eller "fail"
var passport = require('passport');

// GET home page. Renderar startsidan 
router.get('/', function(req, res, next) {
  res.render('main-page/startpage');
});

// GET request my-account page has to come before notloggedin function
router.get('/account/my-account', isLoggedIn, function(req, res, next) {
  res.render('account/my-account');
});

// GET create-account page
router.get('/account/create-account', function(req, res, next) {
  res.render('account/create-account', {csrfToken: req.csrfToken()});
});

// POST form, return response message based on true/false sucess result.
router.post('/account/create-account', passport.authenticate('local.signup', {
  successRedirect: '/account/my-account',
  failureRedirect: '/account/create-account',
  failureFlash: true
}));


// GET homepage *logout*
router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

router.use('/', notLoggedIn, function(req, res, next) {
  next();
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

// GET request login page
router.get('/account/login', function(req, res, next) {
  res.render('account/login');
});

// GET request startpage
router.get('/main-page/startpage', function(req, res, next) {
  res.render('main-page/startpage');
});

// POST, uses passport to authenticate. See passport.js
router.post('/account/login', passport.authenticate('local.signin', {
  successRedirect: '/account/my-account',
  failureRedirect: '/account/login',
  failureFlash: true
}));

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

// 
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

function notLoggedIn(req, res, next) {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}