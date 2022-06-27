var heading = document.querySelector(".heading");
heading.style.color = "grean";
heading.style.fontSize = "100px";
heading.style.textDecoration = "underline";

var example = document.querySelector(".example");
example.style.color = "red";
example.style.fontSize = "50px";
example.style.textDecoration = "underline";

var divExample = document.querySelector("#divExample");
divExample.style.color = "blue";
divExample.style.fontSize = "25px";
divExample.style.textDecoration = "underline";

var h2Element = document.createElement("h2");
document.body.append(h2Element);
h2Element.innerHTML = "Hello World!";

var p = document.createElement("p");
document.body.appendChild(p);
p.innerHTML = "Hello World!";

var button = document.querySelector("button");
button.addEventListener("click", clickHandler, false);
function clickHandler() {
  console.log("Button clicked");
  button.removeEventListener("click", clickHandler, false);
  button.style.display = "none";
}
