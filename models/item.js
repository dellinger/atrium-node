var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    user_id : String,
    name : String,
    price : Number,
    updated_at : Date
});

module.exports = mongoose.model('Item', ItemSchema);