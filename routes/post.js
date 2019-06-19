// app.get is a function that routes HTTP GET requests to the specified path with the specified callback functions. first param = root directory
var express = require('express');
var router = express.Router();

router.get('/', function(req,res, next) {
    res.render('post');
})

module.exports = router;