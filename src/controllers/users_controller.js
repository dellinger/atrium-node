var User = require('../models/user')

exports.create = function(user,createCallback) {
    var user = new User(req);
    user.save(function(err,doc){
        if(err){
            console.error("Could not save user");
            return createCallback(err);
        } else {
            console.log("Saved user: " + doc.name);
            return createCallback(null,doc);
        }
    })
}