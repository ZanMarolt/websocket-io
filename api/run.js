// Setup express app
const express = require('express');
const app = express();

// Setup socket.io
const server = require('http').Server(app);
const io    = require('socket.io')(server);

server.listen(3033);

io.on('connection', (socket)=>{

    socket.on('message', (data)=>{

        socket.emit('messages', data);
        socket.broadcast.emit('message', data);

    });

});