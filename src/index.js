import express from 'express';
import socketio from 'socket.io';
import http from 'http';

const app = express(),
    server = http.Server(app),
    io = socketio(server);

app.use(express.static('public'));

io.on('connection', socket => {
    console.log(`A user connected`);
});

server.listen(process.env.PORT || 3000, () => console.log('Listening'));
