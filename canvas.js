// This will be interesting since it's totally new concept
/*
Canvas: An alternative way of drawing graphics apart from Scalable Vector Graphics (SVG)
and writing directly into the DOM

A canvas is a single DOM element that encapsulates a picture. It 
provides a programming interface for drawing shapes onto the space 
taken up by the node.

There are currently two widely supported drawing styles: "2d" for two-dimensional 
graphics and "webgl" for three-dimensional graphics through the OpenGL interface
*/

// SVG
let circleSvg = document.querySelector("circle");
circleSvg.setAttribute("fill", "cyan");

// CANVAS
// context object will be abbreviated as ctx
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(10, 10, 100, 60);
ctx.textAlign = "center";
ctx.font = "15px Georgia blue";
ctx.fillText("Hello world", 12, 12, 100);

ctx.strokeRect(115, 75, 100, 60);
ctx.lineWidth = 5;
ctx.strokeStyle = "blue";

ctx.strokeRect(115, 10, 100, 60);

//PATHS
/*
Paths are not values that can be stored and passed around.
*/
let cxt = document.querySelector("#canv").getContext("2d");
cxt.beginPath();
for (let y = 10; y < 100; y += 10) {
  cxt.moveTo(10, y);
  cxt.lineTo(90, y);
}
cxt.stroke();

//2 Triangle
let ctx1 = document.querySelector("#canv2").getContext("2d");
ctx1.beginPath();
ctx1.moveTo(50, 10);
ctx1.lineTo(10, 70);
ctx1.lineTo(90, 10);
ctx1.fill();

//Curves
let cx = document.querySelector("#canvas").getContext("2d");
cx.beginPath();
cx.moveTo(10, 90);

// control=(60,10) goal=(90,90)
cx.quadraticCurveTo(60, 10, 90, 90);
cx.lineTo(60, 10);
cx.closePath();
cx.stroke();

// A Curve
/*
The arc method is a way to draw a line that curves along the edge of a circle.
It takes a pair of coordinates for the arc’s center, a radius, and then a start
angle and end angle.
Those last two parameters make it possible to draw only part of the circle.
The angles are measured in radians, not degrees. This means a full circle has
an angle of 2π , or 2 * Math.PI, which is about 6.284. The angle starts counting
at the point to the right of the circle’s center and goes clockwise from there.
 */
let circle = document.querySelector("#curve").getContext("2d");

circle.beginPath();
// center=(50,50) radius=40 angle=0 to 7
circle.arc(50, 50, 40, 0, 7);
// center=(150,50) radius=40 angle=0 to π ½
circle.arc(150, 50, 40, 0, 0.5 * Math.PI);

circle.stroke();

// Pie Chart
const results = [
  { name: "Satisfied", count: 1043, color: "lightblue" },
  { name: "Neutral", count: 563, color: "lightgreen" },
  { name: "Unsatisfied", count: 510, color: "pink" },
  { name: "No comment", count: 175, color: "silver" },
];

let chart = document.querySelector("#piechart").getContext("2d");
let total = results.reduce((sum, { count }) => sum + count, 0);
//Start at the top
let currentAngle = -0.5 * Math.PI;
for (let result of results) {
  let sliceAngle = (result.count / total) * 2 * Math.PI;
  chart.beginPath();
  // center=100,100, radius=100
  // from current angle, clockwise by slice's angle
  chart.arc(100, 100, 100, currentAngle, currentAngle + sliceAngle);
  currentAngle += sliceAngle;
  chart.lineTo(100, 100);
  chart.fillStyle = result.color;

  chart.fill();
}

// -> Canvas Text
let canvText = document.querySelector("#text").getContext("2d");
canvText.font = "28px Georgia";
canvText.fillStyle = "fuchsia";
canvText.fillText("Hello world from canvas", 10, 50);

//-> Images
/*
The drawImage method allows us to draw pixel data onto a canvas. This
pixel data can originate from an <img> element or from another canvas.
*/
let canvImg = document.querySelector("#img").getContext("2d");
let img = document.createElement("img");
img.src = "logo2.png";
img.addEventListener("load", () => {
  for (let x = 10; x < 200; x += 30) {
    canvImg.drawImage(img, x, 10, 70, 80);
  }
});

// Transformations : scale()
let canvScaling = document.querySelector("#transform").getContext("2d");
canvScaling.scale(2.1, 0.52);
canvScaling.beginPath();
canvScaling.arc(100, 100, 90, 0, 8);
canvScaling.lineWidth = 3;
canvScaling.stroke();

// --> Honestly? I don't enjoy drawing or gaming coding
