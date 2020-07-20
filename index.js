const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");
const writeToFile = util.promisify(fs.writeFile);

// array of questions for user
function promptUser() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the desired title of your ReadMe?"
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a description for your project"
        },
        {
            type: "input",
            name: "installation",
            message: "Please tell the user how they can install your project"
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide usage information for the project"
        },
        {
            type: "input",
            name: "contributing",
            message: "Do you wish for others to contribute to this project? If yes, please state so and add your guidelines. If no, state as such."
        },
        {
            type: "input",
            name: "tests",
            message: "Please write some tests for your application, and provide examples for how to run them"
        },
        {
            name: "username",
            message: "Enter your Github username"
        },
        {
            name: "email",
            message: "Enter the email best suited for contacting you"
        },
        {
            type: "input",
            name: "questions",
            message: "Your github profile and email are being provided as a way for the user to contact you. Please provide instructions on how to best reach you"
        },
        {
            type: "input",
            name: "license",
            message: "Which license do you want to use?",
            choices: ["APM", "AUR", "Bower", "Cocoapods", "Conda", "CPAN", "CRAN/METACRAN", "Crates.io", "CTAN", "DUB", "Eclipse Marketplace", "GitHub", "Hex.pm", "NPM", "No License"]   
        }
    ])
    .then(function({ username }) {
        const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    })    
} 

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }
promptUser();
// function call to initialize program
// init();
