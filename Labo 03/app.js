var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log("prout");
    res.send(index.html);
    //res.send('Hello World');
});

console.log("Server Running...");

app.listen(9000);