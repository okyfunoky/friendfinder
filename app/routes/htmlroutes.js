var express = require('express');
var router = express.Router();
var path = require('path')

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../index.html'))
});

//add page html route
router.get('/add',function(req,res){
    res.sendFile(path.join(__dirname,'../add.html'))
});

module.exports = router;