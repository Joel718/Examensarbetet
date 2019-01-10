var Product = require('../mongoose_schema/products');

var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost:27017/project', {useNewUrlParser: true});
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds119734.mlab.com:19734/examendb', {useNewUrlParser: true});

var products = [
        new Product({
        imagePath: 'https://images.unsplash.com/photo-1523983302122-73e869e1f850?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        title: 'BMW',
        text: 'For sale',
        price: 290
    }),
    new Product({
        imagePath: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        title: 'Tesla - Model 3',
        text: 'Already bought',
        price: 500.000
    }),
    new Product({
        imagePath: 'https://images.unsplash.com/photo-1506244856291-8910ea843e81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        title: 'Volvo',
        text: 'Discount',
        price: 180.000
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