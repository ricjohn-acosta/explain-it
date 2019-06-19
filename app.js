
// Creates an Express application - a framework for Node.js that allows for server based applications that will listen for any i/o reqs from users.
var express = require('express'); // require() is a Node.js function. Passing in 'express' parameter loads the express module.
var app = express(); // Stores the variable/function 'express' into the variable 'app'.

// Set the port of application
// process.env.PORT for whatever port Heroku gives and port:3000 as our local port.
var port = process.env.PORT || 4000;

// express.static is a built-in middleware function that serves static files/assets (css,js,html).
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.get('/',function(req,res ) {
  res.render('main');
});

app.listen(port, function() {
  console.log('Server running on localhost:' + port);
});