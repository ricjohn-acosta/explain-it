var express = require('express');
var router = express.Router();
var connection = require('../config/dbConnection');

/* Connects to MySQL database */
connection.checkConnection();
connection.connect();

/* Creates a page where a list of JSON can be found which is then fetched by the frontend fetch() */
router.get('/', async function (req, res, next) {
    await connection.connect().query("SELECT content FROM post", function (err, rows, fields) {
        if (err) {
            console.log('error')
        }
        post = rows;
        res.json(post);
        res.end();
    })
})

module.exports = router;
