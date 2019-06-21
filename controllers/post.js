// app.get is a function that routes HTTP GET requests to the specified path with the specified callback functions. first param = root directory second param = callback function
var express = require('express');
var router = express.Router();

router.get('/', function(req,res, next) {
    res.render('post');
})

router.post('/post', (req, res) => {
    const title = req.body.title;
    const explanation = req.body.explanation;
    const queryString = "INSERT INTO nXE9gAAK9C (title,content) VALUES(?,?)"
    getConnection().query(queryString, [title, explanation],);
    res.end();
})
module.exports = router;