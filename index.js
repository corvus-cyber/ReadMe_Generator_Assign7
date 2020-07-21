const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");
const writeToFile = util.promisify(fs.writeFile);
const generateMarkdown = require("./utils/generateMarkdown.js");

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
            type: "confirm",
            name: "contributing",
            message: "Do you wish for others to contribute to this project?",
        },
        {
            when: (response) => response.contributing === true,
            type: "input",
            name: "guidelines",
            message:"please add your guidelines for how the user can contribute.",
        },
        {
            when: (response) => response.contributing === false,
            type: "input",
            name: "guidelines",
            message: "Please state your desire for not having any contributions and explain why."
        },        
        {
            type: "input",
            name: "tests",
            message: "Please write some tests for your application, and provide examples for how to run them"
        },
        {
            type: "input",
            name: "username",
            message: "Enter your Github name"
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
            type: "list",
            name: "license",
            message: "Which license do you want to use?",
            choices: ["Apache 2.0", "GNU GPLv3", "MIT", "ISC", "GNU AGPLv3", "Mozilla Public 2.0", "The Unlicense", "No License"]   
        }
    ])
    //This will be used to take the profile provided by the user and place their github link within: 
    .then(function(response) {
        console.log(response)
        // const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    
        // axios.get(queryUrl).then(function(res) {
        //   const repoNames = res.data.map(function(repo) {
        //     return repo.name;
        //   });
    
        //   const repoNamesStr = repoNames.join("\n");
    
          fs.writeFile("Project.md", generateMarkdown(response), function(error){
            if (error){
                return console.log(error);
            }
        })

    });  
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
