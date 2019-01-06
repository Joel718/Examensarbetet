var Product = require('../mongoose_schema/products');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/project', {useNewUrlParser: true});

var products = [
        new Product({
        imagePath: 'https://images.unsplash.com/photo-1523983302122-73e869e1f850?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        title: 'BMW - car',
        text: 'For sale',
        price: 290
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result){
        done++;
        if (done === products.length){
           exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}