var express = require('express');
var router = express.Router();

var Item = require('../models/item.js');

/**
 *
 * @api {get} /items Retrieve all items
 * @apiName getItems
 * @apiGroup Item
 *
 * @apiSuccess {Object[]} item List of items.
 * @apiSuccess {String} item.name
 * @apiSuccess {String} item.description
 * @apiSuccess {Number} item.price
 *
 * @apiSuccessExample Example data on success:
 * {
 *  name : 'Gameboy',
 *  price : 50.99
 * }
 *
 */
router.get('/', function(req,res,next){
    Item.find({},function (err, items, count){
       if(err){
           return next(err);
       } else {
           res.json(items);
       }
    });
});

/**
 * @api {post} /items Create an Item
 *
 */
router.post('/', function(req,res,next){
    if(req.body) {
        Item.create(req.body, function (err, post) {
            if (err) {
                return next(err);
            } else {
                res.json(post);
            }
        });

    }
});

router.get('/:id', function(req,res,next){
    Item.findById(req.params.id, function(err, post){
        if(err) {
            return next(err);
        } else {
            res.json(post);
        }
    });
});

router.put('/:id', function(req,res,next){
    Item.findByIdAndUpdate(req.params.id, req.body, function(err,post){
        if(err){
            return next(err);
        } else {
            res.json(post);
        }
    });
});

router.delete('/:id', function(req,res,next){
    Item.remove({_id : req.params.id}, function(err){
        if(err){
            return next(err);
        } else {
            res.send(200);
        }
    })
});

module.exports = router;