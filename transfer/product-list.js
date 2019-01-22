// Hämtar produkter från databasen
var Product = require('../mongoose_schema/products');

// Lägger till mongoose modulen
var mongoose = require('mongoose');

// Skapar anslutning mot databasen
mongoose.connect('mongodb://uhhi2000:Hpf21045@ds119734.mlab.com:19734/examendb', {useNewUrlParser: true});

// Skapar upp produkter från schema
var products = [
    new Product({
        imagePath: 'http://www.car-revs-daily.com/wp-content/uploads/2015/02/2015-BMW-M4-Fire-Orange-1.jpg',
        title: 'BMW',
        price: "220.000"
    }), 
    new Product({
        imagePath: 'https://car-images.bauersecure.com/pagefiles/74819/lotus_cars_01.jpg',
        title: 'Lotus',
        price: "350.000"
    }), 
    new Product({
        imagePath: 'https://images.unsplash.com/photo-1541878117466-0e3000a65864?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        title: 'Toyota',
        price: "280.000"
    }),
    new Product({
        imagePath: 'https://images.unsplash.com/photo-1521410195597-69e2218fcee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        title: 'Mazda',
        price: "180.000"
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