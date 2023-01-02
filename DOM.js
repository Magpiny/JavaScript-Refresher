// Document Object Module
// We use JS to manipulate html ements using DOM
/*
 */

let arrayish = { 0: "one", 1: "two", length: 2 };
let array5 = Array.from(arrayish);
console.log(array5.map((s) => s.toUpperCase())); // → ["ONE", "TWO"]

//
/*
If you want a solid collection of nodes, as opposed to a live one, you can
convert the collection to a real array by calling Array.from()

<p data-classified="secret">JavaScript is Fun</p>
<p data-classified="unclassified">Typescript is more fun</p>
*/
let parag = document.body.getElementsByTagName("p");
for (let para of Array.from(parag)) {
  if (para.getAttribute("data-classified") == "secret") {
    para.remove();
  }
}

//animation
let logo = document.querySelector("img");
let angle = Math.PI / 2;
function animate(time, lastTime) {
  if (lastTime != null) {
    angle += (time - lastTime) * 0.001;
  }
  logo.style.top = Math.sin(angle) * 20 + "px";
  logo.style.left = Math.cos(angle) * 200 + "px";
  requestAnimationFrame((newTime) => animate(newTime, time));
}
requestAnimationFrame(animate);

/*
you can register only one handler per node that way. The addEventListener 
method allows you to add any number of handlers so that it is safe to add 
handlers even if there is already another handler on the element.
The removeEventListener method, called with arguments similar to addEventListener
, removes a handler.
*/
window.addEventListener("keydown", (event) => {
  if (event.key == "v" || event.key == "V") {
    document.body.style.background = "violet";
    // console.log(event.key);
  } else if (event.key == "b" || event.key == "B") {
    document.body.style.background = "blue";
  } else if (event.key == "g" || event.key == "G") {
    document.body.style.background = "green";
  } else if (event.key == "r" || event.key == "R") {
    document.body.style.background = "red";
  }
});
window.addEventListener("keyup", (event) => {
  if (event.key == "v") {
    document.body.style.background = "";
  }
});

window.addEventListener("click", (event) => {
  let dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = event.pageX - 4 + "px";
  dot.style.top = event.pageY - 4 + "px";
  document.body.appendChild(dot);
});

// window.addEventListener("keydown", (event) => {
//   alert(`${event.key} pressed and target was ${event.target}`);
// });

// Web Worker API
/* let worker = new Worker()
For cases where you really do want to do some time-consuming thing in the
background without freezing the page, browsers provide something called web
workers. A worker is a JavaScript process that runs alongside the main script,
on its own timeline

workers do not share their global scope or any other data with the main script’s
environment. Instead, you have to communicate with them by sending messages back and forth.
*/
let squareworker = new Worker("./worker.js");
squareworker.addEventListener("message", (event) => {
  print(`The worker responded with ${event.data}`);
});
squareworker.postMessage(10); //-> The worker responded with 100
/*Only values that can be represented as JSON can be sent as messages—the other
  side will receive a copy of them, rather than the value itself.
  */
squareworker.postMessage(12); //-> The worker responded with 144

/* SUMMARY

Pressing a key fires "keydown" and "keyup" events. Pressing a mouse button
fires "mousedown", "mouseup", and "click" events. Moving the mouse fires
"mousemove" events. Touchscreen interaction will result in "touchstart", "
touchmove", and "touchend" events.
Scrolling can be detected with the "scroll" event, and focus changes can
be detected with the "focus" and "blur" events. When the document finishes
loading, a "load" event fires on the window.
*/
