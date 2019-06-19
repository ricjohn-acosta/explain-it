
// Creates an Express application - a framework for Node.js that allows for server based applications that will listen for any i/o reqs from users.
var express = require('express'); // require() is a Node.js function. Passing in 'express' parameter loads the express module.
var app = express(); // Stores the variable/function 'express' into the variable 'app'.
var routes = require('./controllers/main')
var post = require('./controllers/post')

// Set the port of application
// process.env.PORT for whatever port Heroku gives and port:3000 as our local port.
var port = process.env.PORT || 4000;

// set engine used for viewable page - EJS in this case.
app.set('view engine', 'ejs');

// express.static is a built-in middleware function that serves static files/assets (css)
app.use(express.static('public'));
app.use('/', routes);
app.use('/post', post);


app.listen(port, function() {
  console.log('Server running on localhost:' + port);
});