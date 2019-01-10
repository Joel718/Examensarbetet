var express = require('express');
var router = express.Router();
var Product = require('../mongoose_schema/products');
var csrf = require('csurf');
var session = require('express-session');
var passport = require('passport');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, docs) {
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize){
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('product-page/index', { products: productChunks });

  });
});

router.get('/account/create-account', function(req, res, next) {
  var messages = req.flash('error');
  res.render('account/create-account', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});

});

router.post('/account/create-account', passport.authenticate('local.signup', {
  successRedirect: '/account/my-account',
  failureRedirect: '/account/create-account',
  failureFlash: true
}));

router.get('/account/my-account', function(req, res, next) {
  res.render('account/my-account');
});

module.exports = router;