function testvar() {
  if (true) {
    var x = 10;
  }
  console.log(x);
}
testvar();

function testLetConst() {
  if (true) {
    let y = 20;
    const z = 30;
    console.log(y, z);
  }
}

testLetConst();

function testvar() {
  if (true) {
    var r = 100;
  }
  console.log(r);
}
testvar();

function testletconst() {
  if (true) {
    let u = 200;
    const e = 700;
    console.log(u, e);
  }
}
testletconst();

// dynamic typing
let javaScriptIsFun = true;
javaScriptIsFun = false;
console.log(javaScriptIsFun);

// data types =====
//  whatis data type

var jjUdo = "ino";
jjUdo = "ifot";
console.log(jjUdo);

//  data type is an attribute of data which tells the compiller or interpreter how the programmer  intend to use the data
//

let city = "Uyo";
console.log(typeof city);

// let myAge = "600";
// console.log(typeof myAge);

/* 
1. create 5 variables and reassign their values, using dynamic typing show all in the browser console.

2. create variables to store

student name
age
favourite subject
is the student a graduate? (True/False)

answer must appear in this format: My name is john, i am 16 years old. My favourite subject is Math. Graduate: false
e.g
*/

let myName = "John";
let carName = "toyota";
let myAge = 120;
let isRich = true;
console.log(
  "My name is" +
    myName +
    "I drive a" +
    carName +
    "car." +
    "I am" +
    myAge +
    "years old" +
    "is rich" +
    isRich,
);

alert("hi");

function testvar() {
  if (true) {
    var y = "you";
  }
  console.log(y);
}
testvar();

function testletconst() {
  if (true) {
    let w = "waka";
    const c = "commomn";
    console.log(w, c);
  }
}
testletconst();

let fullName = "Godspower Douglas Bassey";
fullName = "Douglas Akpan Bassey";
console.log("My name is " + fullName);

var p = "everule";
console.log(typeof p);

// practice

let age1 = 17;
let hasID = true;
console.log(age1 >= 18 && hasID === true);

let bro = true;
let sis = false;
console.log(bro == false && sis === true);

let people = 18;
let eligible = true;
console.log(people >= 20 && eligible === true);

let boys = true;
let girls = false;
console.log(boys || girls);

let b1 = true;
let b2 = false;
if (!b1) {
  console.log("okay na");
} else {
  console.log("disappear");
}

let juve = 18;
let sure = true;
console.log(juve >= 18 && sure === true);

let uko2 = "money";
let goIn = "true";
if (uko2 && goIn) {
  console.log("access granted");
} else {
  console.log("access denied");
}

// or

let bread = "true";
let melon = "false";
console.log(bread || melon);

let tea = "drink";
let energyDrink = false;
if (tea || energyDrink) {
  console.log("you can take");
} else {
  console.log("leave it");
}

// not

let james = "handsome";
console.log(!james);

let shakes = "great";
if (!shakes) {
  console.log("awesome");
} else {
  console.log("olodo");
}

let kk3 = "hi ";
let kk2 = "bro";
let over = kk3 + kk2;
console.log(over);

let uui = "hi bro ";
uui += "you are welcome";
console.log(uui);

// loose equal to ==
let agenum1 = 18;
let ageStri2 = "15";
console.log(agenum1 == ageStri2);

let isLoggedIn = true;
let loginVa = 1;
console.log(isLoggedIn == loginVa);

// strict equal to ===
console.log(6 === "6");

let scoreki = 100;
let scoretex = "100";
console.log(scoreki === scoretex);

// !=
console.log(5 != "5");

let upp = 900;
let upi = "500";
console.log(upp != upi);

// !==

console.log(55 !== "54");

let level = 5;
console.log(level !== 5);

console.log(5 > 4);
console.log(5 < 4);
console.log(5 >= 4);
console.log(5 <= 4);

let okna = 1;
okna += 3;
console.log(okna);

let okna1 = 1;
okna1 -= 3;
console.log(okna1);

let okna2 = 1;
okna2 /= 3;
console.log(okna2);

let okna3 = 1;
okna3 %= 3;
console.log(okna3);

let okna4 = 1;
okna4 *= 3;
console.log(okna4);

let oooo = 2;
oooo++;
oooo++;
console.log(oooo)

let arree = ["5", "7", "9", "0"]
console.log(arree[1])

var yyy1 = {

    name:  "god's power",
    age: "19",
    skill: "web development",
    goal: ["God", "World"],
}
console.log(yyy1.name);