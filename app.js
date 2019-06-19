const express = require('express');
const app = express();
const http = require('http'); // Includes HTTP module which allows node.js to transfer data over the HTTP.
const port = process.env.PORT || 3000 // Let port be whatever is in the environment variable PORT or localhost 3000

const server = http.createServer((req, res) => { // Creates an HTTP server that listens to server ports and gives a response back to the client.
  res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/html'); // Set file to HTML
  //res.end('<h1>Hello World</h1>'); // Header
  app.use(express.static('public'));
  app.get('/main.html', function(req, res) {
    res.sendFile(__dirname + "/" + "main.html");
  })

})

server.listen(port,() => {
  console.log(`Server running at port `+port);
});