var express = require('express');
var router = express.Router();
var Product = require('../mongoose_schema/products');
var csrf = require('csurf');
var session = require('express-session');

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

  res.render('account/create-account', {csrfToken: req.csrfToken()});

});

router.post('/account/create-account', function(req, res, next) {

    res.redirect('/');

});

module.exports = router;