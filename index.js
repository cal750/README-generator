//adding my constants that allow communication to other files in the repository
const inquirer = require('inquirer');
const fs = require('fs')
const markdown = require('markdown');
const {createMarkdown} = require('./markdown/createMarkdown');

const writeFileAsync = markdown.promisify(fs.writeFile)

//created array to store questions that the user will use
const promptUser = () => {
    inquirer.prompt([
        {
            name: "Title",
            type: "input",
            message: "What would you like the Title to be?",
        },
        {
            name: "Description",
            type: "input",
            message: "Write a short description of the project?",
        },
        {
            name: "Installation",
            type: "input",
            message: "What instructions should a user follow to install the application?",
        },
        {
            name: "Usage",
            type: "input",
            message: "How does a user use this application?",
        },
        {
            name: "License",
            type: "List",
            message: "Please choose a license for the application",
            choices: [
                "MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", 
                "APACHE 2.0 [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", 
                "artistic-2.0 [![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)", 
                "bsl-1.0 [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)" , 
                "None"],
        },
        {
            name: "Contributing",
            type: "input",
            message: "How can a user contribute to the project?",
        },
        {
            name: "Tests",
            type: "input",
            message: "How does the user test the application?",
        },
        {
            name: "Github",
            type: "input",
            message: "Please enter your Github username",
        },
        {
            name: "LinkedIn",
            type: "input",
            message: "Please enter your LinkedIn URL",
        },
        {
            name: "Email",
            type: "input",
            message: "Please enter your email address",
        },

//Writes answers to the README file created
    ]).then(answers => {
        writeToFile(answers)
        console.log('README.md created successfully')
        //tells us in the console what errors appear when things go wrong
    }).catch((err) => console.error(err));

};

//creates a README file and writes the answers into it using our pre-made template from 'generateMarkdown'
const writeToFile = answers => {
    writeFileAsync('README.md', generateMarkdown(answers))
}

promptUser();