// Hämtar produkter från databasen
var Product = require('../mongoose_schema/products');

// Lägger till mongoose modulen
var mongoose = require('mongoose');

// Skapar anslutning mot databasen
mongoose.connect('mongodb://uhhi2000:Hpf21045@ds119734.mlab.com:19734/examendb', {useNewUrlParser: true});

// Skapar upp produkter från schema
var products = [
    new Product({
    imagePath: 'https://images.unsplash.com/photo-1523983302122-73e869e1f850?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    title: 'BMW',
    }), 
    new Product({
        imagePath: 'https://images.unsplash.com/photo-1523983302122-73e869e1f850?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        title: 'BMW',
    })
];

// Loopar ut produkter
var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result){
        done++;
        if (done === products.length){
           exit();
        }
    });
}

// Avslutar kopplingen till databasen när produkterna loopats ut.
function exit() {
    mongoose.disconnect();
}