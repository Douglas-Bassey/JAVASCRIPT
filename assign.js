// // assignment 1

// let samuelisaGraduate = false;
// samuelisaGraduate = true;
// console.log(samuelisaGraduate);

// let destiny = "student";
// destiny = "tutor";
// console.log(destiny);

// let shakespare = "tutor";
// shakespare = "student";
// console.log(shakespare);

// let valentine = 26;
// valentine = 14;
// console.log(valentine);

// let douglasWorth = "Average";
// douglasWorth = "not average but OUTSTANDING";
// console.log(douglasWorth);

// // assignment 2

// let studentName = "shakespare";
// let $age = 50;
// let favourite_subject = "python";
// let graduate = true;

// console.log(
//   "My name is " +
//     studentName +
//     " i am " +
//     $age +
//     " years old " +
//     " my favourite subject is " +
//     favourite_subject +
//     " i am a graduate " +
//     graduate,
// );

// alert("assignment");

// // Assignment 2
// // 1. An array of 5 of my favourite food

// let favouriteFood = [
//   "coconut rice with beef and fried plantain",
//   "Banga soup",
//   "Chinese egg fried rice",
//   "Afang soup",
//   "Stew served with any edible that is medically good",
// ];
// console.log(favouriteFood);

// // 2. an object of car with 4 properties

// let carProperties = {
//   suv: "engine",
//   cyberTruck: "Tesla",
//   ferrari: "Speed",
//   lambo: "rearmirror view",
// };
// console.log(carProperties);

// // 2a. log each to console
// console.log(carProperties.suv);
// console.log(carProperties.cyberTruck);
// console.log(carProperties.ferrari);
// console.log(carProperties.lambo);

// // 3. create 5 variables of different data types
// var first = "Destiny";
// var second = 20;
// var third = true;
// var java;
// var sure = "";
// console.log(first, second, third, java, sure);

// // 4. myName variable and log to console
// const myName = "God's power Douglas Bassey";
// console.log(myName);

// // 5. arithemtic operation on 5 variables
// let f1 = 2 + 2;
// let f2 = 2 * 2;
// let f3 = 2 - 2;
// let f4 = 4 / 2;
// let f5 = 5 % 2;
// console.log(f1, f2, f3, f4, f5);

// // 6. variable for score and performing assignment operations
// let score = 10;
// score += 10;
// console.log(score);
// score *= 2;
// console.log(score);
// score -= 20;
// console.log(score);
// score /= 20;
// console.log(score);
// score %= 7;
// console.log(score);
// score **= 2;
// console.log(score);

// ASSIGNMENT

// 1. using switch statement, log the various days  of the week and what you do each day to the console. e.g on monday i go to school, on tuesday i go to church, etc

let daysWeek = "Monday";
switch (daysWeek) {
  case "Monday":
    console.log("Go to work");
    break;

  case "Tuesday":
    console.log("Go to School");
    break;

  case "Wednesday":
    console.log("Go to Mita School");
    break;

  case "Thursday":
    console.log("Learn JS & Shooting");
    break;

  case "Friday":
    console.log("automation");
    break;

  case "Saturday":
    console.log("Work Out");
    break;

  case "Sunday":
    console.log("Go to Church");
    break;

  default:
    console.log("Outside these days, you're in the spirit Realm");
}

/*
2. using the ternary operator, determine if the following numbers are even or odd:
a. 45
b. 80
*/

// a.
let numBer = 45;
let modolusNumber = numBer % 2 === 0 ? "even number" : "Odd number";
console.log(modolusNumber);

// b.
let numBer2 = 80;
let modolusNumber2 = numBer2 % 2 === 0 ? "Even Number" : "Odd Number";
console.log(modolusNumber2);

/*

3. using if else statement, create a weather app.

create a variable called weather.

"rainy" - "take an umbrella"
"sunny" - "wear sunglasses"
cloudy - "expect rain"
thick fog - wear heavy clothing
harmattan - wear face mask
otherwise - "stay safe"

*/

// let weather0 = "rainy";
// if ((weather0 = "rainy")) {
//   console.log("Take an Umbrella");
// } else {
//   console.log("You can go without umbrella");
// }

// let weather1 = "sunny";
// if ((weather1 = "sunny")) {
//   console.log("Wear sunglasses");
// } else {
//   console.log("wear spec....");
// }

// let weather2 = "cloudy";
// if ((weather2 = "cloudy")) {
//   console.log("Expect rain");
// } else {
//   console.log("do not expect rain");
// }

// let weather3 = "thick fog";
// if ((weather3 = "thick fog")) {
//   console.log("wear heavy clothing");
// } else {
//   console.log("do not wear heavy clothing");
// }

// let weather4 = "Harmattan";
// if ((weather4 = "Harmattan")) {
//   console.log("wear face mask");
// } else {
//   console.log("do not wear face mask");
// }

// b. version

let weather = "rainy";
if (weather == "rainy") {
  console.log("Take an umbrella");
} else if (weather == "sunny") {
  console.log("wear sun glasses");
} else if (weather == "cloudy") {
  console.log("expect rain");
} else if (weather == "thick fog") {
  console.log("wear heavy clothing");
} else if (weather == "harmattan") {
  console.log("wear face mask");
} else {
  console.log("stay safe");
}

/*
ASSIGNMENT 

1. inner and outer function
write a function called createMessage.

Requirements;

Inside it, declare a variable called name and assign it your own name. 

inside createMessage, write another function called displayMessage 

displayMessage should log:
hello, My name is _____
call the inner function inside the outer function.

*/
function createMessage() {
  let myName = "Douglas Bassey";

  function displayMessage() {
    console.log("Hello, My name is" + " " + myName);
  }
  displayMessage();
}
createMessage();
/*
2.  CLOSURES

create a function called counter

requirements:
inside it, declare a variable count and set it to 0.
Return an inner function.

each time the returned function is called, iot should;
increase count by 1

log the new value 

example usage;
const myCounter = counter();
myCounter(); // logs 1
myCounter(); // logs 2
myCounter(); // logs 3

*/

function counter() {
  let count = 0;

  function letsCount() {
    count++;
    console.log(count);
  }
  return letsCount;
}

const myCounter = counter();
myCounter();
myCounter();
myCounter();
myCounter();
myCounter();
myCounter();

// ===Assignment // 1. Build a clock showing time in 12hours - AM and PM

//2. create a html element that should respond to the different various events listed below:
// double-click
// mouseover/mouseout

//3. Build a stop watch with start, stop and reset buttons. The stopwatch should display the elapsed time in seconds and milliseconds. Use setInterval() to update the display every 10 milliseconds. Implement the functionality for each button as follows:

/* Start Button: When clicked, the stopwatch should start counting time from 0. If the stopwatch is already running, clicking the start button should have no effect. Stop Button: When clicked, the stopwatch should stop counting time. If the stopwatch is already stopped, clicking the stop button should have no effect. 
 
 Pause Button: When clicked, the stopwatch should pause the counting of time. If the stopwatch is already paused, clicking the pause button should have no effect. 
 
 
  Reset Button: When clicked, the stopwatch should reset the elapsed time to 0 and stop counting if it is currently running. */

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  document.getElementById("clock").textContent =
    `${hours}:${minutes}:${seconds} ${period}`;
}

setInterval(updateClock, 1000);
updateClock();

// 2

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  document.getElementById("clock").textContent =
    `${hours}:${minutes}:${seconds} ${period}`;
}

setInterval(updateClock, 1000);
updateClock();