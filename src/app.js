var express = require('express');
var app = express();
var path = require('path');
const server = require('http').Server(app)
const io = require('socket.io')(server);

app.set('view engine', 'html');
app.use('/public', express.static(__dirname + '/public'));
app.use('/services', express.static(__dirname + '/services'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname , './index.html'));
});

server.listen(process.env.PORT || 5000);

