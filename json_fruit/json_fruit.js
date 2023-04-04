let content = undefined;
let canvas = undefined;

let fruit = [
  { name: "Apple", quantity: 20, color: "red" },
  { name: "Orange", quantity: 10, color: "orange" },
  { name: "Kiwi", quantity: 5, color: "green" },
  { name: "Grape", quantity: 30, color: "purple" },
  { name: "Mango", quantity: 24, color: "yellow" }
];

//document.getElementById('demo').innerHTML = fruit;

function start() {
  canvas = document.getElementById('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context = canvas.getContext('2d');

  generateRectangles(fruit);
}

document.addEventListener('DOMContentLoaded', start);


function makeRectangle(name, width, color, position) {
  context.fillStyle = color;
  context.fillRect(100, 100 * position, 10 * width, 100);
  text(name, 100 * position + 60);
  //context.font = '16pt italics Times New Roman';
  //content.fillStyle = "black";
  //content.fillText(name, 100, 100 * position);
}

function generateRectangles(rect) {

  for (let i = 0; i < rect.length; i++) {
    makeRectangle(rect[i].name, rect[i].quantity, rect[i].color, i);
  }
}

function text(name, height) {
  context.font = '20pt italics Times New Roman';
  context.fillStyle = 'black';
  context.fillText(name, 105, height);
}
