var mongoose = require('mongoose');
var winston = require('winston');
mongoose.connect('mongodb://dev:dev@ds029821.mongolab.com:29821/atrium');



var db = mongoose.connection;
db.on('error', function(){
   winston.log('error', "Could not connect to MongoDB");
});
db.once('open', function (callback) {
    winston.log('info', 'Successfully connected to MongoDB');
});