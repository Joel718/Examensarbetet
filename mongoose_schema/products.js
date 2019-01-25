var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({

    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    price: {type: String, required: true},
    text: {type: String, required: true},
    id: {type: Number, required: true}

});

module.exports = mongoose.model('Product', schema);