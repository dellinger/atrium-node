var secrets = require('./secrets');


module.exports = {
    url : 'mongodb://' + secrets.db.user_name + ':' + secrets.db.user_name + '@ds029821.mongolab.com:29821/atrium'
}
