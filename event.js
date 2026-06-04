/*
EVENTS 

events are actions or occurences that happen in the browser often triggered by user interactions (like clicks, keypresses, or form submissions).

syntax
with single quotes
<element event = 'some javascript code'>

with double quotes
<element event = "some javascript code">

event description
onchange - An HTML element has been changed
onclick - the user clicks an HTML element
onmouseover - the user moves the mouse over an HTML element
onmouseout - the user moves the mouse away from an HTML element
onkeydown - the user pushes a keyboard key
onload - the browser has finished loading the page
*/

function displayDate() {
  document.getElementById("demo1").innerHTML = Date();
}

/* 
EVENT LISTNER
the most appropriate way to write codes relating to events is by using the addEventListener() method. this method attaches an event handler to the specified element without overwriting existing event handlers.*/

const btn = document.getElementById("myBtn");
btn.addEventListener("click", function () {
  document.getElementById("demo2").innerHTML = Date();
});

/*

class work

1. create a html button and a well styled div. whene the button is clicked, the inner html of the div should change to "Javascript" is the best programming language

*/
const clBtn = document.getElementById("JSBtn");

clBtn.addEventListener("click", function () {
  document.getElementById("tag").innerHTML =
    "Javascript is the best programming language";
});

/* MOUSE EVENT 
mouse event happens when the user interacts with a mouse. some of the mouse events include:
click - when the user clicks an element
dblclick - when the user double clicks an element
mouseover - when the user moves the mouse over an element
mouseout - when the user moves the mouse away from an element
mousemove - when the user moves the mouse while it is over an element


*/

// mouseover and mouseout

const box = document.getElementById("box");

box.addEventListener("mouseover", function () {
  box.innerHTML = "Mouse is over me";
});

box.addEventListener("mouseout", function () {
  box.style.backgroundColor = "navy";
  box.style.color = "white";
  box.style.padding = "20px";
  box.innerHTML = "Mouse is out of me";
});

// mouse-double-click
const myButton = document.getElementById("myBTN");
const message = document.getElementById("message");

myButton.addEventListener("dblclick", function () {
  message.textContent = "Button was double clicked";
});

myButton.style.backgroundColor = "green";
setTimeout(() => {
  myButton.style.background = "";
}, 2000);

// mouse move
const tracker = document.getElementById("tracker");
const coords = document.getElementById("coordinates");

tracker.addEventListener("mousemove", function(e) {
  coords.textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
});
