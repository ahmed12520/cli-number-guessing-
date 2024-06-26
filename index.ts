#! /usr/bin/env node 

import inquirer from "inquirer";

// 1) computer will generate a random number 

// 2) user input for guessing number

// 3) compare user input with computer generated number and show result 


const randomNumber = Math.floor(Math.random() * 6 + 1) ;

console.log("wellcome to number guessing game")
const answers = await inquirer.prompt ([
    {
        name : "userGuessNumber",
        type : "number",
        message:  "please guess a number between 1-6:",
     },
]);

if (answers.userGuessNumber === randomNumber) {
    console.log("congratulation! you guessed right number")
} else {
    console.log("you guess wrong number");
}