/* Declare global variables*/
var express = require('express');
var router = express.Router();
var connection = require('../config/dbConnection');

/* Connect to remote mysql database */
connection.checkConnection();
connection.connect();

/* Router methods that handles user requests*/
router.get('/', function(req, res, next) {
    res.render('main');
})
router.post('/', function(req, res) {
    const title = req.body.title;
    const explanation = req.body.concept;
    const queryString = "INSERT INTO post (post_title,content) VALUES(?,?)"
    connection.connect().query(queryString, [title, explanation]);
    res.status(204).send();
})


/* Export router methods used in this file to be used in app.js*/
module.exports = router;