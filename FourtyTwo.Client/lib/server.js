// server.js

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../dist'));
app.listen(80);
console.log('FourtyTwo client server listening on port 80');
