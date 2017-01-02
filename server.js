'use strict';

//Server 

const express = require('express');
const http = require('http');
const engine = require('socket.io');

const port = 3000;
const app = express();

let data = [
  {id: 1, author:"Cosa Uno",text: 'Comentario'},
  {id: 2, auhtor:"Cosa Dos",text: 'Comentario 2'}
  ];

app.use(express.static('./app'));

let server = http.createServer(app).listen(port, () =>{
  console.log(`The server is running on port ${port}`);
});


const io = engine.listen(server);

io.on('connection',(socket) => {
  socket.on('read', () =>{
    io.emit('data', data);
  });
  socket.on('sing',(sign) =>{
    data.unshift(sign);
    io.emit('data',data)
  })
});