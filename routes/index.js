var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = require('../models/item');

//just showing middleware functionality
router.use(function(req, res, next){
    console.log('Something is working :)');
    next();
});


/* GET home page. */
router.get('/', function(req, res) {
    Item.find({},function (err, items, count){
        res.render('index',{
            title : 'Atrium Home Inventory',
            items : items
        });
    });
});

//TODO: This should be a DELETE HTTP Request later on.
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
          console.log('Saved item');
        res.redirect('/');
      });
});




module.exports = router;
