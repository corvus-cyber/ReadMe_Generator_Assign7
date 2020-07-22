const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");
//const writeAsyc = util.promisify(fs.writeFile);
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
async function promptUser() {
    await inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the desired title of your ReadMe?",
            validate: catchEmpty
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a description for your project",
            validate: catchEmpty
        },
        {
            type: "input",
            name: "installation",
            message: "Please tell the user how they can install your project",
            validate: catchEmpty
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide usage information for the project",
            validate: catchEmpty
        },
        {
            type: "confirm",
            name: "contributing",
            message: "Do you wish for others to contribute to this project?",
            validate: catchEmpty
        },
        {
            when: (response) => response.contributing === true,
            type: "input",
            name: "guidelines",
            message:"please add your guidelines for how the user can contribute.",
            validate: catchEmpty
        },
        {
            when: (response) => response.contributing === false,
            type: "input",
            name: "guidelines",
            message: "Please state your desire for not having any contributions and explain why.",
            validate: catchEmpty
        },        
        {
            type: "input",
            name: "tests",
            message: "Please write some tests for your application, and provide examples for how to run them",
            validate: catchEmpty
        },
        {
            type: "input",
            name: "username",
            message: "Enter your Github name",
            validate: catchEmpty
        },
        {
            name: "email",
            message: "Enter the email best suited for contacting you",
            validate: catchEmpty
        },
        {
            type: "input",
            name: "questions",
            message: "Your github profile and email are being provided as a way for the user to contact you. Please provide instructions on how to best reach you",
            validate: catchEmpty
        },
        {
            type: "list",
            name: "license",
            message: "Which license do you want to use?",
            choices: ["Apache 2.0", "GNU GPLv3", "MIT", "ISC", "GNU AGPLv3", "Mozilla Public 2.0", "The Unlicense", "No License"],
            validate: catchEmpty
        }
    ])    
} 
async function catchEmpty(value){

    if(value===""){
        return "Please enter required information."
    } 
    else return true;
}
// function to write README file
// function writeToFile(fileName, data) {

// }

// function to initialize program
// function init() {

// }
promptUser()
    .then(function(response) {
        console.log(response)

        fs.writeFile("Project.md", generateMarkdown(response), function(error){
            if (error){
                return console.log(error);
            }
        }) 
        
    }); 
 
// function call to initialize program
// init();
