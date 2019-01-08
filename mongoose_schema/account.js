var mongoose = require('moongose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    email: {type: String, require: true},
    password: {type: String, require: true}

});

module.exports = mongoose.model('User', userSchema);