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
