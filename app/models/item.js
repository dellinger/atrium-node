var mongoose = require('mongoose');

module.exports = mongoose.model('Item', {
    name : {type : String, default: ''}
});
