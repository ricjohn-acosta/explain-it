/* Declare global variables*/
var express = require('express'); // Import express framework
var router = express.Router(); // Stores router module into variable router. 
var connection = require('../config/dbConnection');

/* Connect to remote mysql database */
connection.checkConnection();
connection.connect();

/* Router methods that handles user requests*/


router.post('/', function (req, res) {
  const title = req.body.title;
  const explanation = req.body.explanation;
  const queryString = "INSERT INTO post (post_title,content) VALUES(?,?)"
  connection.connect().query(queryString, [title, explanation]);
})
router.get('/', function (req, res, next) {
  res.render('post');
})



/* Export router methods used in this file to be used in app.js*/
module.exports = router;


/* connection.connect().query("SELECT content FROM post", function(err,rows,fields) {
  if(err) {
    console.log('error')
  }
  res.render('post', {
    content: rows[0].content
  })
}) */
