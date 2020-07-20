const inquirer = require("inquirer");
const fs = require("fs");
const writeToFile = util.promisify(fs.writeFile);

// array of questions for user
//const questions = [
//];
function promptUser() {
    return inquirer.prompt([
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
            type: "input",
            name: "questions",
            message: "Please describe any common questions the user might run across and provide answers for them"
        },
    ])
} 

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
