var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = require('../models/item');
var winston = require('winston');


/* GET home page. */
router.get('/', function(req, res) {
    Item.find({},function (err, items, count){
        res.render('index',{
            title : 'Atrium Home Inventory',
            items : items
        });
    });
});

router.get('/delete/:id', function(req,res){
    Item.findById(req.params.id, function(err, item){
        item.remove(function(err,item){
            console.log("Removed item");
            res.redirect('/');
        });
    });
});

router.post('/create',function(req,res){
    console.log("Creating new item");
  new Item({
    name : req.body.name,
    price : req.body.price,
    updated_at : Date.now()
  }).save(function(err, item, count) {
          winston.log('info', 'Saved item');
          res.redirect('/');
      });
});




module.exports = router;
