/* Declare global variables*/
var express = require('express');
var router = express.Router();

/* Router methods that handles user requests*/
router.get('/', function(req,res, next) {
    res.render('main');
})

/* Export router methods used in this file to be used in app.js*/
module.exports = router;