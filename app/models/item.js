var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemSchema = new Schema({
    user_id : String,
    name : String,
    description : String,
    price : Number,
    date_of_purchase : Date,
    image : String,
    receipt_image : String,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Item', ItemSchema);