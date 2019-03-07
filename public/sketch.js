var socket;

function setup() {
  createCanvas(600, 600);
  background(51);

  // Create a var that connects to the server
  socket = io.connect("http://localhost:3000");

  // Var socket handles RECEIVING msgs
  socket.on("mouse", newDrawing);
}

function newDrawing(data) {
  noStroke();
  fill(63, 224, 208);
  ellipse(data.x, data.y, 25, 25);
}

// Function for SENDING msgs
function mouseDragged() {
  // Create a JS object with the data in it
  var data = {
    x: mouseX,
    y: mouseY
  };

  socket.emit("mouse", data);

  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 25, 25);
}
