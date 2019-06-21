// app.get is a function that routes HTTP GET requests to the specified path with the specified callback functions. first param = root directory second param = callback function
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

// Connect to remote mysql
function getConnection() {
    return mysql.createConnection({
      host: 'remotemysql.com',
      user: 'nXE9gAAK9C',
      password: '2nLLI1fG21',
      database: 'nXE9gAAK9C',
      port: '3306'
    })
  }
  
  var connection = getConnection();
  connection.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('mysql connected..');
  });
  

router.get('/', function (req, res, next) {
    res.render('post');
})

router.post('/', (req, res) => {
    const title = req.body.title;
    const explanation = req.body.explanation;
    const queryString = "INSERT INTO post (post_title,content) VALUES(?,?)"
    getConnection().query(queryString, [title, explanation]);
    res.render('post');
    res.end();
})

module.exports = router;