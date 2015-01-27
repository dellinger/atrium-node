var express = require('express'),
    router = express.Router(),
    users = require('../../app/controllers/users_controller');

router.post('/', function(req, res) {
    users.create(req.body, function(err, user) {
        if (err) {
            console.log(err);
            res.status(500).end(err);
        } else {
            res.send(user.toJSON()).end();
        }
    });
});

module.exports = router;