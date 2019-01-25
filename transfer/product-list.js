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
        price: "507000",
        text: 'BMW M4',
        id: 1
    }), 
    new Product({
        imagePath: 'https://car-images.bauersecure.com/pagefiles/74819/lotus_cars_01.jpg',
        title: 'Lotus',
        price: "398000",
        text: 'Lotus Exige 260',
        id: 2
    }), 
    new Product({
        imagePath: 'https://images.unsplash.com/photo-1541878117466-0e3000a65864?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        title: 'Toyota',
        price: "400000",
        text: 'Toyota GT86',
        id: 3
    }),
    new Product({
        imagePath: 'https://images.unsplash.com/photo-1521410195597-69e2218fcee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        title: 'Mazda',
        price: "220000",
        text: 'Mazda 3',
        id: 4
    }),
    new Product({
        imagePath: 'https://images.unsplash.com/photo-1530505849655-e0a1121554a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
        title: 'Maserati',
        price: "380000",
        text: 'Maserati Quattroporte',
        id: 5
    }),
    new Product({
        imagePath: 'https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
        title: 'Ferrari',
        text: 'Ferrari 458',
        price: "1900000",
        id: 6
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