var express = require('express');
var router = express.Router();
var connection = require('../config/dbConnection');

connection.checkConnection();
connection.connect();

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
