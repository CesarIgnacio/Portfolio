let canvas;
let context;

function canvasColor() {
    canvas = document.getElementById('mycanvas');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    context = canvas.getContext('2d');
}

document.addEventListener('DOMContentLoaded', canvasColor);

/* "Mouse" object created to store the x and & position
    of the mouse and use it in the below eventListener.
*/
var mouse = {
    x: undefined,
    y: undefined
}

const maxRadius = 50;

const colorArray = [
    '#2C3E50',
    '#E74C3C',
    '#ECF0F1',
    '#3498DB',
    '#2980B9'
];

/**
 * Event listener to keep track of the mouse movement on
 * the windows in order to animate the moving circles.
 */
window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
});

/**
 * Event listener to resize the screen responsively, every time
 * we shrink or spand the browser's window.
 */
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init(); // Reinicializes the circles
});

// An class Circle
class Circle {
    constructor(x, y, speedX, speedY, radius) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.radius = radius;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

        this.draw = function () {
            context.beginPath();
            context.arc(this.x, this.y, this.radius, Math.PI * 2, false);
            context.fillStyle = this.color;
            context.fill();
        };

        this.update = function () {
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0)
                this.speedX = -this.speedX;


            if (this.y + this.radius > innerHeight || this.y - this.radius < 0)
                this.speedY = -this.speedY;

            this.x += this.speedX;
            this.y += this.speedY;

            // Intercativity
            if (mouse.x + 50 > this.x && mouse.x - 50 < this.x &&
                mouse.y + 50 > this.y && mouse.y - 50 < this.y) {

                if (this.radius < maxRadius) {
                    this.radius += 1;
                }
            } else if (this.radius > radius) {
                this.radius -= 1;
            }

            this.draw();
        };
    }
}

let circleArr = []; // Creating empty array of circles
init(); // Calls init() function

/**
 * Fills up the cicleArr[]
 */
function init() {

    circleArr = [];

    const sp = 2; // Speed for all the circles: 0 = stops

    /** Storing 500 circles with randomized characteristics in the circle array.
     * Radius: 20 - 60 pixels
     * Location: x and y - inside the window (following the diameter)
     */
    for (let i = 0; i < 500; i++) {

        let radius = (Math.random() * 5) + 2;
        let x = Math.random() * (window.innerWidth - radius * 2) + radius;
        let y = Math.random() * (window.innerHeight - radius * 2) + radius;
        let speedX = (Math.random() - 0.5) * sp;
        let speedY = (Math.random() - 0.5) * sp;

        circleArr.push(new Circle(x, y, speedX, speedY, radius));
    }

}


/**
 * This function animates the array of circles 
 */
function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < circleArr.length; i++) {
        circleArr[i].update();
    }

}
// Calls the animate function
animate();