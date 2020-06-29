var express = require('express');
var app = express();
var path = require('path');
const server = require('http').Server(app)
const io = require('socket.io')(server);

app.set('view engine', 'html');
app.use('/js', express.static(__dirname + '/js'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname , '/index.html'));
});

server.listen(process.env.PORT || 3000);

