#! usr/bin/env node
import inquirer from "inquirer";
// // --------------- Operators ---------------
// // comparison
let num = 15;
let num2 = 15;
if (num < num2) {
    console.log("num is then num2");
}
else if (num == num2) {
    console.log("num is eqaul num2");
}
else {
    console.log("num is not then num2");
}
let x = 'Pakistan';
let correctAnswer = "Pakistan";
if (x == correctAnswer) {
    console.log("Correct!");
}
let xy = 'Pakistan';
let correctAnswer2 = "pakistan";
if (xy == correctAnswer2) {
    console.log("Correct!");
}
else {
    console.log("Wrong!");
}
let number1 = 10;
let number2 = '10';
if (num == num2) { // this wiil be true
    console.log("Both numbers are equals");
}
if (num === num2) { //it will be false
    console.log("Both have different datatype");
}
// ----------------------- Taking input from user through inquirer package -------------  
let name = await inquirer.prompt([
    {
        name: "name",
        message: "Enter your name: ",
        type: "input"
    }
]);
console.log("Your name is " + name.name);
