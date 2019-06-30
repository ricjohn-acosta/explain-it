/* Declare global variables */
var express = require('express'); // require() is a Node.js function. Passing in 'express' parameter loads the express module.
var app = express(); // Stores the variable/function 'express' into the variable 'app'.
var bodyParser = require('body-parser');
var main = require('./controllers/mainRouter');
var postData = require('./models/postModel');


/* Server */
var port = process.env.PORT || 4000; // process.env.PORT for whatever port Heroku gives and port:3000 as our local port.
app.listen(port, function() {
    console.log('Server running on localhost:' + port);
});

/* Processing middlewares */
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

/* Set engine used for viewable page - EJS in this case. */
app.set('view engine', 'ejs');

/* User request middlewares */
app.use('/', main);
app.use('/postData', postData);