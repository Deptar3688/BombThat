// ====== MAGIC ======
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});
// ===================

// TO START SERVER: 
// nodemon server.js
// then go to localhost:6567 (or whatever the port is)

// Using port 6567, can change to whatever
// process.env.PORT is a variable set by hosting services (not used rn)
const port = process.env.PORT || 6567;
server.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

// Whenever a client connects
io.on('connection', socket => {
    console.log(`ID: ${socket.id} has joined.`);
    // When client disconnects
    socket.on('disconnect', () => {
        console.log(`ID: ${socket.id} has disconnected.`);
    });
    // NETWORKING CODE SHOULD GO IN HERE
    // ex. socket.on("playerMove", (x, y) => {
    //     move da player or something like that
    // })
});