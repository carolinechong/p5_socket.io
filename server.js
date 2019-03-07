// Import express module
var express = require("express");
// Store in variable
var app = express();

// port 3000
var server = app.listen(3000);

// User to see all static files inside public folder
app.use(express.static("public"));

console.log("My socket server is running");
// To run in terminal: "node server.js"

// Import socket library
var socket = require("socket.io");
var io = socket(server);

// Create an event "connection" to handle new connections
io.sockets.on("connection", newConnection);

function newConnection(socket) {
  console.log("new connection: " + socket.id);

  // If there is a message called "mouse", then trigger the following function.
  socket.on("mouse", mouseMsg);

  // When a mouseMsg comes in, call the broadcast.emit function to send "mouse" msg back out.
  function mouseMsg(data) {
    socket.broadcast.emit("mouse", data);

    // Send msg to everyone, including client who sent it
    // io.sockets.emit("mouse", data);
    console.log(data);
  }
}
