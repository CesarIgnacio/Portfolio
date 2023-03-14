/**
 * Width = x coordinate -
 * Height = y coordinate |
 */

function changeCanvasColor() {
    // Locate the element "mycanvas" in the document.
    var canvas = document.getElementById("mycanvas");

    if (canvas == null) alert('Error with canvas');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var context = canvas.getContext("2d");

    //context.fillRect(0, 0, canvas.width, canvas.height);

    // Diagonal line \
    // context.moveTo(0, 0);
    // context.lineTo(canvas.width, canvas.height);

    // Diagonal line /
    // context.moveTo(canvas.width, 0);
    // context.lineTo(0, canvas.height);

    //context.stroke();

    /* Crating rectangles
        parameters (x, y, size x, size y) in pixels
        starting counting from the left top corner */
    context.fillStyle = "rgb(105, 105, 105)"; // Adding color
    context.fillRect(200, 300, 50, 50);
    context.fillStyle = "rgb(0, 0, 255, 0.5)"; // Color has to be
    context.fillRect(100, 150, 50, 50);
    context.fillStyle = "rgb(0, 255, 175, 0.7)"; // added right
    context.fillRect(500, 500, 50, 50);
    context.fillStyle = "rgb(255, 0, 0, 0.6)"; // befor the rectangle
    context.fillRect(600, 300, 50, 50);

    // Creating lines
    context.beginPath(); // Re-starts the painting? (more or less)
    // Line #1
    context.moveTo(150, 200);
    context.lineTo(200, 300);

    // Line #2
    context.moveTo(250, 350);
    context.lineTo(500, 500);

    // Line #3
    context.moveTo(550, 500);
    context.lineTo(600, 350);

    // Line #4
    context.moveTo(600, 300);
    context.lineTo(150, 150);

    context.strokeStyle = "rgb(105, 105, 105)"; // Give color to the lines
    context.stroke();

    // Arc / Circle
    context.beginPath();
    context.arc(600 - 10, 100 - 9, 25, Math.PI * 2, false);
    context.strokeStyle = 'lightyellow';
    context.stroke();

    // Arc using a for loop
    for (let i = 0; i < 10; i++) {
        context.beginPath();
        context.arc(600 + (i * 10), 100 + (i * 9), 25 + (i), Math.PI * 2, false);
        context.strokeStyle = 'lightgreen';
        context.stroke();
    }

    // Randomized
    // Randomized Arcs
    for (let i = 0; i < 10; i++) {
        const w = Math.floor(Math.random() * canvas.width);
        const h = Math.floor(Math.random() * canvas.height);
        const r = Math.floor(Math.random() * 40) + 10;
        context.beginPath();
        context.arc(w, h, r, Math.PI * 2, false);
        context.strokeStyle = 'lightpink';
        context.stroke();
    }

    // Randomized rectangles
    for (let i = 0; i < 10; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const z = Math.floor(Math.random() * 30) + 20;

        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);

        context.fillStyle = `rgb(${r}, ${g}, ${b})`;
        context.fillRect(x, y, z, z);
    }

    // Randomized lines
    for (let i = 0; i < 10; i++) {
        context.beginPath();
        const x = (Math.random() * canvas.width);
        const y = (Math.random() * canvas.height);
        const zX = Math.floor(Math.random() * 50) + 10;
        const zY = Math.floor(Math.random() * 50) + 10;

        const pomX = Math.round(Math.random()) * 2 - 1;
        const pomY = Math.round(Math.random()) * 2 - 1;

        context.moveTo(x, y);
        context.lineTo(x + (zX * pomX), y + (zY * pomY));

        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        context.strokeStyle = `rgb(${r}, ${g}, ${b})`;
        context.stroke();
    }

}


// Once the HTML document has finished loading and has been 
// parsed, call the changeCanvasColor function.
document.addEventListener('DOMContentLoaded', changeCanvasColor);
