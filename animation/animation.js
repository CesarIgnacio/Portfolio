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

const maxRadius = 80;

/**
 * Event listener to keep track of the mouse movement on
 * the windows in order to animate the moving circles.
 */
window.addEventListener('mousemove',
    function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
        console.log(mouse);
    });

// An object Circle
function Circle(x, y, speedX, speedY, radius) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.radius = radius;

    this.draw = function () {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        context.strokeStyle = 'blue';
        context.stroke();
        context.fillStyle = 'black';
        context.fill();
    }

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
    }
}

// Creates one circle
let circle1 = new Circle(200, 200, 10, 10, 50);


let circleArr = [];
const sp = 5; // Speed for all the circles: 0 = stops

/** Creates 50 circles with randomized characteristics.
 * Radius: 20 - 60 pixels
 * Location: x and y - inside the window (following the diameter)
 */
for (let i = 0; i < 50; i++) {

    let radius = (Math.random() * 40) + 20;
    let x = Math.random() * (window.innerWidth - radius * 2) + radius;
    let y = Math.random() * (window.innerHeight - radius * 2) + radius;
    let speedX = (Math.random() - 0.5) * sp;
    let speedY = (Math.random() - 0.5) * sp;

    circleArr.push(new Circle(x, y, speedX, speedY, radius));
}

//console.log(circleArr);

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);

    // context.beginPath();
    // context.arc(x, y, radius, Math.PI * 2, false);
    // context.strokeStyle = 'blue';
    // context.stroke();

    // const ponX = Math.round(Math.random() * 2) - 1;
    // const ponY = Math.round(Math.random() * 2) - 1;
    // x += Math.random() * ponX * speedX;
    // y += Math.random() * ponY * speed;

    circle1.update();

    for (let i = 0; i < circleArr.length; i++) {
        circleArr[i].update();
    }

    // if (x + radius > innerWidth || x - radius < 0)
    //     speedX = -speedX;
    // else
    //     speedX += Math.random();

    // if (y + radius > innerHeight || y - radius < 0) 
    //     speedY = -speedY;
    // else 
    //     speedY += Math.random();

    //     x += speedX;
    // y += speedY;
}

animate();