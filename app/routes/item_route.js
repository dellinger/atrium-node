var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Item = require('../models/item.js');

router.get('/', function(req,res,next){
    Item.find({},function (err, items, count){
       if(err){
           return next(err);
       } else {
           res.json(items);
       }
    });
});

module.exports = router;