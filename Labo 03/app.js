var express = require('express');
var app = express();

app.get('/test', function(req, res){
  res.send('Hello World');
});

app.listen(9000);