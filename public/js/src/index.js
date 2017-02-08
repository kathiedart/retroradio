import $ from 'jquery';
import 'bootstrap';
import socketio from 'socket.io-client';

const io = socketio();

io.on('connection', socket => {
    console.log(`A user connected`);

    socket.on('disconnect', () => {
        console.log(`Disconnected from server`);
    })
})

console.log(`Hello World!`);
