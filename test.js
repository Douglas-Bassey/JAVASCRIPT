// Test Questions 

/* 
1. a user has a wallet balance of 5000.

// create a varriables for :
//  wallet balance
// amount spent on food
// amount spent on transport
// calculate and log the remaning balance to the console
// create a varriables  to store :

2.
// full name
// year of birth
// current year

// calcuate the person's age and log a sentence like: 
// my name is john. i am 20 year's old.
// to the console

 3 create a varriables called battery. 
// use if else statement
// 80 and above  "battery full"
// 40 to 79 "battery medium"
//below 40 "battery low"// 
// 


4 create a varriables called age.
// use tenary operator:
// 18 and above "can vote"
// below 18 "cannot vote"
// 
*/

// ANSWERS

// no. 1
let walletBalance = 10000;
let foodAmount = 4000;
let transportFee = 1000;
let totalexpenses = foodAmount + transportFee;
walletBalance -= totalexpenses;
console.log(walletBalance)

// No. 2

let fullName = "God's power Douglas Bassey ";
let yearofBirth = 2006;
let currentYear = 2026;
let total = currentYear - yearofBirth
console.log("My name is " + fullName + "and i am " + total + " years old.")

// No. 3 
let battery = 30;
if (battery >= 80){
    console.log("Battery Full")
}else if (battery >= 79){
    console.log("battery medium")
}else if (battery >= 40){
    console.log("battery medium ")
}else if (battery <= 40){
    console.log("battery low")
}else{
    console.log("plug in charger")
}

// no. 4
let age = 18;
let eligibility = age >= 18 ? "Can vote" : "Cannot vote";
console.log(eligibility)
