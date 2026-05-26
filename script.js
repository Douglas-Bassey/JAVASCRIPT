// /*
// INTRODUCTION  TO JAVASCRIPT

// JAVASCRIPT is a high level, objecct oriented multi-paradigm programming language.

// By high level, it means that we donot have to worry about complex stuff like memory management.

// By object-oriented we mean that javascript supports the use of objects which are collections of properties and methods that can represent real world entities.

// Multi-paradigm means that javascript supports various programming styles including procedural, objected-oriented, and functional programming giving developers the flexibility in how they structure codes.

// By language we are referring to a tool that allows us to communicate instructions to a computer in a way that it can understand and execute.

// JAVASCRIPT SYNTAX AND VARIABLES
// JavaScript syntax is simply the rules that define how you write valid JavaScript code—how statements are structured, how variables are declared, how functions are written, and how everything fits together so the engine understands you.

// JAVASCRIPT STATEMENT
// A statement is a complete instruction that JavaScript executes.

// COMMENT
// A comment is code that JavaScript ignores completely.

// VARIABLES
// A variable in JavaScript is a named container used to store data so you can use and reuse it later.

// Value is a piece of data. it is the most fundamental unit of information that we have in programming. call it the smallest unit of information, e.g 23, 45, "food", etc
// */

// var age = 90;
// // console.log(age);

// let fullName = "Nyetoro Ime";
// console.log(fullName, age);

// /*

// variables naming rules and conventions:
// 1. variables names should be descriptive e.g let color = "mango" is wrong. let color ="blue" is correct.

// 2. variable names must start with (a-z, A-Z) e.g if the variable contains just a name, use lower case letter, let age = 80
// // if it contains two words (names) use:
// //a. camel case e.g const firstName = "Nyetoro"
// //b. snake case e.g let his_age = 90
// //c. pascal case e.g let MyAge = 70

// 3. variable names cannot start with a digit

// 4. variable names can start with $ sign e.g $name = "Hypeman"
// 5. Do not use reserved keywords

// */

// let firstJob = "teacher";
// let secondJob = "programmer";

// let greeting = "HELLO";
// // console.log(greeting)

// let firstName = "James";
// console.log(greeting, firstName);

// // PRACTICE AREA
// // incrementing numher means adding 1 number to a variable

// var myVar = 87;

// // incrementing now
// // myVar = myVar + 1;
// // console.log(myVar)

// // short way of incrememting
// myVar++;
// console.log(myVar);
// // same thing with decrementing just the change of sign to  (-)

// // DECIMAL NUMBER IN JS
// // changing decimals
// var ourDecimal = 5.7;

// // only change code below this line
// var myDecimal = 0.009;
// console.log(ourDecimal);

// // multiplying decimals

// var product = 2.0 * 2.5;
// console.log(product);

// // division of decimal

// var qoutient = 4.4 / 2.2;
// console.log(qoutient);

// // finding a remainder
// var remainder;
// remainder = 11 % 3;
// console.log(remainder);

// // compounding assignment with argumentated subtraction
// // shortcut

// var a = 11;

// a -= 6;

// // var a = 6 -a;

// // compounding assignment with argumentated multiplication
// // shortcut

// var a = 11;

// a *= 6;

// // compounding assignment with argumentated division
// // shortcut

// var a = 11;

// a /= 6;

// // escaping literal quotes in a string
// // meaning that when once it sees and ending quotes, it thinks that the end, but you can change that using the backslash called the escacpe character. e.g
// var myStr = 'i am a "double quoted" struing inside" double quotes';
// console.log(myStr);

// // quoting string  in a single quote e.g
// var mystri = ' a ref is a "baller"';
// console.log(mystri);

// // escape sequence in strings
// var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
// console.log(myStr);

// // concatenating string with plus operator

// var ourStr = "This is the start. " + "This is the end.";
// console.log(ourStr);
// var h1 = "i am douglas";
// console.log(h1);
// // concatenating string with plus equal operator
// var myStr = "this is the first sentence. ";
// myStr += "This is the second sentence.";
// console.log(myStr);

// // appending variables to strings
// var anAdjective = "awesome";
// var ourStr = "Douglas is ";
// // appending..........
// ourStr += anAdjective;
// console.log(ourStr);

// // finding length of a string
// var lastNamelenght = 0;
// var lastName = "douglas";
// lastNamelenght = lastName.length;
// console.log(lastNamelenght);

// // INTEGERS AND FLOATS

// // Integers are whole number and float are decimal numbers
// /*
// we have two types of data types in Js

// 1. Primitive data type
// 2. Object data types
// */

// // primitive data type can hold only one value
// let x = 20;
// console.log(x);

// // object data type can hold more than one value and it doesnt use let
// ((x = 20), 30);
// console.log(x);

// // Symbols are unique and immutable data types that can be used as identifiers for object properties. they are created using the Symbol() function and can be used to create unique keys for objects, ensuring that they do not conflict with other keys. Symbols are often used in scenarios where you want to add properties to an object without risking name collisions with existing properties.

// console.log(777 == "777");
// // this is true because it only compares the value and not the data type

// console.log(777 === "777");

// // using the greater than and less than operator
// console.log(5 > 3); // true
// console.log(5 < 3); // false

// // pipe || - or
// // && amper sign - and
// // ! exclamation mark - not
// // BOOLEANS
// // boolean data type can only have two values which are true and false. they are used to compare values and make decisions in code.

// let betNaija = 300;
// let hasAccount = true;

// if (betNaija >= 200 && hasAccount == true) {
//   alert("This user can be a customer");
// } else {
//   alert("This user cannot be a customer");
// }

// // UNDEFINED
// let andyAge;
// console.log(typeof andyAge);

// let bigInt = 1234567890;

// // OBJECTS DATA TYPES
// /*
// these are data types that can hold more than two or more values. they include:
// 1. Arrays
// 2. Objects

// Arrays
// Arrays are special type of variables used to store more thhan one value []*/

// let colors = ["red", "blue", "green", "yellow", "purple"];
// console.log(colors);

// /* class work
// 1. create an array of numbers and log it to the console

// */

// let $num = ["7", "1", "2", "4", "6"];
// console.log($num);

// // how to log a particular value to a console.
// console.log($num[2]);

// /* Objects
// objects are used to store collection of data in key-value pairs{}

// */
// const person = {
//   name: "James",
//   age: 120,
//   isMarried: true,
//   height: 6.7,
//   eyeColor: "brown",
//   hobbies: ["playing football", "cooking", "sleeping", "coding"],
// };
// console.log(person);
// console.log(person.age);

// // create an object of a student named delight 1. log all the key-values to the console, log any key value to the console.

// const student = {
//   name: "Delight",
//   age: 19,
//   course: "web dev",
//   street: "ekpeyong",
//   school: "mita",
//   isPunctual: true,
//   hobbies: ["code", "debug", "git init", "command"],
// };
// console.log(student);
// console.log(student.name);

// /* operators & conditional statements
// operators are special symbols that perform operations on operands (values and variable)

// types of operators
// 1. arithemtic operators - are used to perform mathematical operations

// 2. assignment operators
// 3. comparison operators
// 4. logical operators
// 5. string operators
// */

// // ARITHMETIC OPERATOR 1. SUBSTRACION
// let xi = 12;
// let y = 8;
// let subNum = xi - y;
// console.log(subNum);

// let sub = 90 - 70;
// console.log(sub);

// // addition
// const add_num = 45 + 8;
// console.log(add_num);

// // multiplication
// let multNum = 4 * 9;
// console.log(multNum);

// // MODULUS (%) OPERATOR divide numbers and return the remainder

// let div = 44 / 2;
// console.log(div);

// let mod = 11 % 3;
// console.log(mod);

// let dee = 5 / 9;
// console.log(dee);

// // increment (++)
// let incNum = 20;
// incNum++;
// incNum++;
// incNum++;
// incNum++;
// console.log(incNum);

// let inc_num = 20;
// function increment() {
//   console.log(inc_num);
//   inc_num++;
// }
// increment();
// increment();

// // +=
// let bigNum = 20;
// bigNum += 2;
// console.log(bigNum);

// // decrement - opposite of increment
// let decNum = 20;
// decNum--;
// console.log(decNum);

// let pNum = 100;
// pNum -= 50;
// console.log(pNum);

// /*
// ASSIGNMENT OPERATORS

// this are operators or symbols that assign values to a variable
// =, +=, -=, *=, /= and %=
// */

// let ai = 5;
// ai *= 5;
// console.log(ai);

// // using string
// let str = "hello ";
// str += "world!";
// console.log(str);

// //  /=
// let ddd = 20;
// ddd /= 5;
// console.log(ddd);

// //  %=

// let ukoo = 17;
// ukoo %= 2;
// console.log(ukoo)

// // exponetiation assignment operator **=
// let ex = 8;
// ex **= 70;
// console.log(ex)

// /*
// 1. create an array of 5 of your favorite foods and log it to the console
// 2. create an object of a car with 4 properties and log it ot the console
// a. log each of the properties to the console
// 3. create 5 variables of different data types and log them to the console
// 4. create a variable called myName and assign it your name. Log the data type to the console
// 5. create 5 variable and use different arithemetic operator to perform operations on them. log the result to the console.
// 6. create a variable score = 10. log the result of score after performing each of the assignment operations on it. (+=, -=, *=, /=, %=, **=)
// */

// /* comparison operators

// these are operators used to combine multiple boolean expressions
// == loose equal to - checks only values and not data types
// === strict equal to - checks values and data types
// != loose not equal to
// !== strict not equal to
// < less than
// >greater than
// <= less than or equal to
// >= greater than or equal to

// */

// // 1. ==
// // // a.
// console.log(5 == 5);

// // b
// let ageNumber = 18;
// let ageStr = "15";
// console.log(ageNumber == ageStr);

// // c
// let isLoggedIn = true;
// let loginVa = 1;
// console.log(isLoggedIn == loginVa);

// // 2. strict equals to ===
// console.log(5 === "5");
// let score = 100;
// let scoreText = "100";
// console.log * (score === scoreText);

// // 3 != -- checks if values are not the same (ignores data type)
// // a
// console.log(5 != "5");

// // b
// let price = 900;
// let priceText = "500";
// console.log(price != priceText);

// // 4. !== (strict not equal to) - checks if values are not the same (also checks for data types)
// // a.
// console.log(5 !== "5");

// let level = 3;
// console.log(level !== 3);

// // 5. < less than
// let myAgE = 15;
// let requiredAge = 18;
// console.log(myAgE < requiredAge);

// // vb.
// let itemsInCart = 10;
// console.log(itemsInCart < 10);

// // 6. > greater than
// let balance = 5000;
// let priceToPay = 3000;
// console.log(balance > priceToPay);

// // 7. <= less than or equal to
// let attempts = 3;
// let maxAttempts = 3;
// console.log(attempts <= maxAttempts);

// // 8. >= greater than or equal to
// let examScore = 75;
// let passMark = 60;
// console.log(examScore >= passMark);

// let walletBalance = 20000;
// console.log(walletBalance >= 1000);

// /* logical operators 
// logical operators are used to combine multiple boolean expressions. They are used in decision making.
// 1. && (logical AND) - returns true if both operands are true
// 2. || (Logical OR) - returns true if at least one of the operands is true
// 3. ! (Logical NOT) - negates the boolean value of an operand
// */

// // 1. && - logical AND
// let age1 = 17;
// let hasID = true;
// console.log(age1 >= 18 && hasID === true);

// // b.
// let isLoggedIn1 = true;
// let hasPaid = false;
// // console.log(isLoggedIn && hasPaid);

// if (isLoggedIn1 && hasPaid) {
//   console.log("you can view the premium content");
// } else {
//   console.log("please login and complete payment");
// }

// // 2. || - logical OR
// // a.
// let isAdmin = false;
// let isModerator = true;
// console.log(isAdmin || isModerator);

// // b.
// let hasCash = true;
// let hasCard = false;
// // let hasCar = false;
// // console.log(hasCash || hasCard || letCar);

// if (hasCash || hasCard) {
//   console.log("payment successful");
// } else {
//   console.log("No Payment Method Available");
// }

// // 3. ! logical NOT
// // a.
// let isOnline = true;
// console.log(!isOnline);

// // b.
// let hasAccess = false;
// console.log(!hasAccess);

// let isBanned = true;
// if (!isBanned) {
//   console.log("Welcome to the platform");
// } else {
//   console.log("Your account is banned");
// }

// /* 
// STRING OPERATIONS - CONCATENATION

// String concatenation is the process of combining two or more strings together using the + operator

// */

// let msg = "Hello ";
// let msg$ = "World!";

// // by redeclaring a variable
// let msg3 = msg + msg$;
// console.log(msg3);

// // b. by using assignment method
// let message = "Hello ";
// message += "Welcome to JS Class";
// console.log(message);

// // c.
// let mez = "Hi";
// let mezz = "my name is James";
// console.log(mez + " " + mezz);

// let myName = "Douglas";
// // let myAge = "1000"
// // console.log("My name is " + myName + " and i am " + myAge + " years old")

// /* 
// conditional statements

// conditional statements are used to perrfdorom different actions based on different conditions
// The main conditonal statements in JS are:
// 1. if statement
// i. if else statement
// ii. else if ladder

// 2. switch statement
// 3. ternary operator
// */

// // if statement syntax

// // if(condition){
// //   // code to be excuted
// // }

// let myAge = 15;
// if (myAge >= 18) {
//   console.log("I am an Adult");
// } else {
//   console.log("i am still a minor");
// }

// // multiple if statement

// let score1 = 80;
// if (score1 >= 70) {
//   console.log("Grade : A - Excellent result");
// } else if (score1 >= 50) {
//   console.log("Grade: B - Good job");
// } else if (score1 >= 40) {
//   console.log("Grade: C - you passed");
// } else {
//   console.log("Grade: F - Try again next semester");
// }

// /* 
// SWITCH STATEMENT

// the swtich statement is used to perform different actionns based on different conditions. it is an alternative to using multiple if ... else statements when you have many conditions to check.

// a switch statements checks one value and compares it against many possible cases. 

// */

// let light;
// light = "Yellow";
// switch (light) {
//   case "Red":
//     console.log("Stop!");
//     break;

//   case "Yellow":
//     console.log("Get Ready!");
//     break;

//   case "Green":
//     console.log("Go!");
//     break;
//   default:
//     console.log("Technical error");
// }

// // user role simulation
// let role = "admin";
// switch (role) {
//   case "admin":
//     console.log("Welcome admin");
//     break;

//   case "editor":
//     console.log("welcome, editor");
//     break;

//   case "viewer":
//     console.log("welcome, viewer");
//     break;

//   case "visitor":
//     console.log("welcome visitor");
//     break;

//   default:
//     console.log("You are not welcome");
// }

// /* 
// TERNARY operator 
// a shorter version of if...else
// */

// let herAge = 25;
// let hmessage = herAge >= 18 ? "Adult" : "Minor";
// console.log(hmessage);

// let isloggedIn = false;
// let loginStatus = isloggedIn ? "welcome!" : "PLEASE log in";
// console.log(loginStatus);

// let numba = 7;
// let result = numba % 2 === 0 ? "even" : "odd";
// console.log(result);

/* 
ASSIGNMENT 

1. using switch statement, log the various days  of the week and what you do each day to the console. e.g on monday i go to school, on tuesday i go to church, etc

2. using the ternary operator, determine if the following numbers are even or odd:
a. 45
b. 80

3. using if statement, create a weather app.

create a variable called weather.

"rainy" - "take an umbrella"
"sunny" - "wear sunglasses"
otherwise - "stay safe"

make it 5

*/
/* 
FUNCTIONS

A function is a reusable blockof code tha performs a specific task. it is a fundamental building block in programming that allows us to break down complex problemt into smaller, more manageable pieces. Functions can take inputs (parameters) and return outputs (results). 
They help to improve code organization, readibility and maintainability  by allowing us to encapsulate logic and reuse it throughout our programs. Functions can  be defifned using the function keyword or as arrow functions in Javascript.

NOTE: functions cannot work except it is been called i.e "invokation"

TYPES OF FUNCTIONS

1. Normal Function - function name(){}
2. Arrow funtion - const name = ()=>{}

*/
// Formal funcitons 
function greet() {
  console.log("Hello, World")
}
greet(); // calling or invoking a function

// function declaration
// a function declaration is a way to define a named function in javascript using the function keyword. it's one of the fundamnetal ways to create reusable blocks of code.

function sayHello() {
  console.log("Hello, welcoome to javascript class!");
} sayHello

// function hoisting - calling a function before declaring it
sayHi()

function sayHi() {
  console.log("Hi")
}

// Function Expression
// anytime we get a variable and set it equal to someting, whether it's a function or string or somwthing else, that is knowm as expression.

const name = "Douglas" // variable expression

const speak = function () {
  console.log("Good day!");
};
speak();


/* parameters and arguments

parameters = placeholders 
arguments = actual values 

*/