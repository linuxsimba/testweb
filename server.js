var express = require('express');
var app = express();
var port = 8000;
var os = require('os');
var hostname = os.hostname();

app.get('/', function (req, res) {
  res.send(hostname + '\n');
})

app.listen(port, function() {
  console.log('Start Web Server at http://' + hostname + ':' + port);
})
