// loops are used to repeat a block of codes as long as a specified condition is true

const cars = ["toyota", "honda", "ford", "BMW", "Mercedes", "Audi"];
// console.log(cars[0])
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[3]);
// console.log(cars[4]);
// console.log(cars[5]);

// for loop
// for(let i = 0; i<cars.length; i++)
// {
//     console.log(cars[i])
// }

/* types of loops in JS

1. for loop
2. while loop
3. do.. while loop
4. for.. in loop
5. for.. of loop
*/

/* 1. for loop executes a block of code a specified number of times

syntax is:
for(initialization, condition, increment){
code to execute
}
*/

// for (let i = 0; i < 5; i++) {
//   console.log("iteration number: " + i);
// }

/* 2. while loop

this executes a block of code as long as specified condition is true

syntax
while(condition){
code to execute
*/

// let i = 10;
// while (i <= 20) {
//   console.log(i);
//   i++;
// }

// decrement
// let i = 5;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

/* 
print even number from 0 - 10 using while loop
*/
// let number = 0;
// while (number <= 10) {
//   if (number % 2 === 0) {
//     console.log(number);
//   }
//   number++;
// }

/* 3. do.. while loop - executes a block of code at least once, and then repeats the loop as long as a specified condition is true

the syntax: 
do{
code to execute
}while (condtion)

*/

// let a = 10;
// do {
//   console.log(a);
//   a++;
// } while (a < 5);

// let count = 0;
// do {
//   console.log("count is: " + count);
//   count++;
// } while (count < 5);

/* 4. for.. in loop - iterates over the enumerable properties of an object 

syntax:
for(variable in object){
code to execute}
*/

// const person = {
//   name: "Douglas",
//   age: 700,
//   city: "uyo",
// };

// for (const key in person) {
//   console.log(key + ": " + person[key]);
// }

// 5. for.. of loop - iterates over the values of an iterable object ( like arryas, strings etc)
// syntax
// for(variable of iterable){
// codes to execute}

// const fruits = ["pear", "banana", "orange", "grapes"];
// for (const fruit of fruits) {
//   console.log(fruit);
// }

/*
ASSIGNMENT

1. Create a function that takes an array of numbers as input and returns the sum of all the number in the array, use a for loop to iterate through the array and calculate the sum. log the result to the console.

2. use the for loop to decrease from 20 - 0  and log the numbers to the console

3. Using the do while loop, write a function that  prints the first 10 odd numbers. log the result to the console.
*/

console.log("No. 1 Assignment");
// 1.

const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (const number of numbers) {
  sum += number;
}

console.log(sum);

// 2
console.log("No. 2 Assignment");
for (let dE = 20; dE > -1; dE--) {
  console.log("Decending Order: " + dE);
}

console.log("No. 3 Assignment");
// 3.

let number = 1;

do {
  if (number % 2 !== 0) {
    console.log(number);
  }
  number++;
} while (number <= 19);

const names = ["spongebob", "patrick", "squidward", "sanday"];
console.log(names);

// convert it to JSON string
const jsonString = JSON.stringify(names);
console.log(jsonString);

// object
const person = {
  name: "Spongebob",
  age: 30,
  isEmployed: true,
  hobbies: ["jellyfishing", "karate", "cooking"],
};

console.log(person); //before stringifying
const personString = JSON.stringify(person);
console.log(personString);

// array of objects
const people = [
  {
    name: "spongebob",
    age: 30,
    isEmployed: true,
  },

  {
    name: "patrick",
    age: 34,
    isEmployed: false,
  },

  {
    name: "sanday",
    age: 27,
    isEmployed: true,
  },

  {
    name: "squidwars",
    age: 50,
    isEmployed: false,
  },
];
console.log(people);

const peopleString = JSON.stringify(people);
console.log(peopleString);

// parse method is the opposite of what a json string does, it converts the json string back to the original form.

// to convert objects or arrays into a string, we can surround them with a pair of backticks.

const jsonNames = `["spongebob", "patrick", "squidward", "sanday"]`;
console.log(jsonNames);

const jsonPerson = `{
  name: "Spongebob",
  age: 30,
  isEmployed: true,
  hobbies: ["jellyfishing", "karate", "cooking"],
}`;
console.log(jsonPerson);

// HOW TO FETCH A JSON FILE
// fetch() is a built in function that allows us to make network requests and handle responses in an asynchronous way. it returns a promise that resolves to the response object representing the reponse to the request.

fetch("person.json")
  .then((response) => response.json())
  .then((value) => console.log(value));

  // for poeple
  fetch("people.json")
  .then((response) => response.json())
  .then((values) => values.forEach((value) => console.log(value.name)))
  .catch((error) => console.log(error))