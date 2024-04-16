#! /usr/bin/env node

// import the inquire from module which is a command line interface for Node.js
import inquirer from "inquirer";

const answers: {
    sentence:string
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the wOrd: "
    }
])

const word = answers.sentence.trim().split(" ");

// print the arry of word to the console
console.log(word);

console.log(`Your sentence wOrd count is ${word.length}`);

