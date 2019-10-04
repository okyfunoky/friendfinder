var express = require('express');
var router = express.Router();
var path = require('path')

router.get('/addhero',function(req,res){
    res.sendFile(path.join(__dirname,'../public/addhero.html'))
});

router.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'../public/home.html'))
});

module.exports = router;