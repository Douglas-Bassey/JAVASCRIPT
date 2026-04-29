/* 
INTRODUCTION  TO JAVASCRIPT

JAVASCRIPT is a high level, objecct oriented multi-paradigm programming language.

By high level, it means that we donot have to worry about complex stuff like memory management.

By object-oriented we mean that javascript supports the use of objects which are collections of properties and methods that can represent real world entities.

Multi-paradigm means that javascript supports various programming styles including procedural, objected-oriented, and functional programming giving developers the flexibility in how they structure codes.

By language we are referring to a tool that allows us to communicate instructions to a computer in a way that it can understand and execute.


JAVASCRIPT SYNTAX AND VARIABLES
JavaScript syntax is simply the rules that define how you write valid JavaScript code—how statements are structured, how variables are declared, how functions are written, and how everything fits together so the engine understands you.


JAVASCRIPT STATEMENT  
A statement is a complete instruction that JavaScript executes.

COMMENT
A comment is code that JavaScript ignores completely.

VARIABLES
A variable in JavaScript is a named container used to store data so you can use and reuse it later.

Value is a piece of data. it is the most fundamental unit of information that we have in programming. call it the smallest unit of information, e.g 23, 45, "food", etc
*/

var age = 90;
// console.log(age);

let fullName = "Nyetoro Ime"
console.log(fullName, age)

/* 

variables naming rules and conventions:
1. variables names should be descriptive e.g let color = "mango" is wrong. let color ="blue" is correct.

2. variable names must start with (a-z, A-Z) e.g if the variable contains just a name, use lower case letter, let age = 80
// if it contains two words (names) use:
//a. camel case e.g const firstName = "Nyetoro"
//b. snake case e.g let his_age = 90
//c. pascal case e.g let MyAge = 70

3. variable names cannot start with a digit

4. variable names can start with $ sign e.g $name = "Hypeman"
5. Do not use reserved keywords

*/

let firstJob = "teacher";
let secondJob = "programmer";

let greeting = "HELLO";
// console.log(greeting)

let firstName = "James"
console.log(greeting, firstName)



// PRACTICE AREA
// incrementing numher means adding 1 number to a variable

var myVar = 87;

// incrementing now
// myVar = myVar + 1;
// console.log(myVar)


// short way of incrememting
myVar++;
console.log(myVar)
// same thing with decrementing just the change of sign to  (-)

// DECIMAL NUMBER IN JS
// changing decimals
var ourDecimal = 5.7;

// only change code below this line
var myDecimal = 0.009;
console.log(ourDecimal)


// multiplying decimals

var product = 2.0 * 2.5;
console.log(product)

// division of decimal

var qoutient = 4.4 / 2.2;
console.log(qoutient)

// finding a remainder
var remainder;
remainder = 11 % 3;
console.log(remainder)

// compounding assignment with argumentated subtraction
// shortcut

var a = 11;

a -= 6;

// var a = 6 -a;

// compounding assignment with argumentated multiplication
// shortcut

var a = 11;

a *= 6;

// compounding assignment with argumentated division
// shortcut

var a = 11;

a /= 6;

// escaping literal quotes in a string
// meaning that when once it sees and ending quotes, it thinks that the end, but you can change that using the backslash called the escacpe character. e.g
var myStr = "i am a \"double quoted\" struing inside\" double quotes"
console.log(myStr)

// quoting string  in a single quote e.g
var mystri = ' a ref is a "baller"'
console.log(mystri)

// escape sequence in strings
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(myStr)

// concatenating string with plus operator

var ourStr = "This is the start. " + "This is the end."
console.log(ourStr)
var h1 = "i am douglas"
console.log(h1) 
// concatenating string with plus equal operator
var myStr = "this is the first sentence. "
myStr += "This is the second sentence." 
console.log(myStr)

// appending variables to strings
var anAdjective = "awesome";
var ourStr = "Douglas is "
// appending..........
ourStr += anAdjective 
console.log(ourStr)

// finding length of a string
var lastNamelenght = 0;
var lastName = "douglas"
lastNamelenght = lastName.length;
console.log(lastNamelenght)

// INTEGERS AND FLOATS

// Integers are whole number and float are decimal numbers
/* 
we have two types of data types in Js

1. Primitive data type
2. Object data types
*/

// primitive data type can hold only one value
let x = 20; 
console.log(x)

// object data type can hold more than one value and it doesnt use let 
 x = 20,30;
console.log(x)

// Symbols are unique and immutable data types that can be used as identifiers for object properties. they are created using the Symbol() function and can be used to create unique keys for objects, ensuring that they do not conflict with other keys. Symbols are often used in scenarios where you want to add properties to an object without risking name collisions with existing properties.

console.log(777 == "777")
// this is true because it only compares the value and not the data type

console.log(777 === "777")  

// using the greater than and less than operator
console.log(5 > 3) // true
console.log(5 < 3) // false


// pipe || - or
// && amper sign - and
// ! exclamation mark - not
// BOOLEANS
// boolean data type can only have two values which are true and false. they are used to compare values and make decisions in code. 

let betNaija = 300;
let hasAccount = true;

if (betNaija >= 200 && hasAccount == true) {
    alert("This user can be a customer");
} else {
    alert("This user cannot be a customer")
}

// UNDEFINED
let andyAge;
console.log(typeof andyAge)

let bigInt = 1234567890; 

// OBJECTS DATA TYPES
/* 
these are data types that can hold more than two or more values. they include:
1. Arrays
2. Objects


Arrays 
Arrays are special type of variables used to store more thhan one value []*/

let colors = ["red", "blue", "green", "yellow", "purple"];
console.log(colors)


/* class work 
1. create an array of numbers and log it to the console

*/

let $num = ["7", "1", "2", "4", "6",]
console.log($num)

// how to log a particular value to a console. 
console.log($num[2])

/* Objects 
objects are used to store collection of data in key-value pairs{}

*/
const person = {
    name: "James",
    age: 120,
    isMarried: true,
    height: 6.7,
    eyeColor: "brown",
    hobbies: ["playing football", "cooking", "sleeping", "coding"],
}
console.log(person)
console.log(person.age)

// create an object of a student named delight 1. log all the key-values to the console, log any key value to the console.

const student = {
    name: "Delight",
    age: 19,
    course: "web dev",
    street: "ekpeyong",
    school: "mita",
    isPunctual: true,
    hobbies: ["code", "debug", "git init", "command"]
}
console.log(student)
console.log(student.name)


/* operators & conditional statements 

*/
