//adding my constants that allow communication to other files in the repository
const inquirer = require('inquirer');
const fs = require('fs')
const markdown = require('markdown');
const {createMarkdown} = require('./markdown/createMarkdown');


const writeFileAsync = markdown.promisify(fs.writeFile)

//created array to store questions that the user will use
const promptUser = () => {
    inquirer.prompt([

//place for answers (empty for now)

//Writes answers to the README file created
    ]).then(answers => {
        writeToFile(answers)
        console.log('README.md created successfully')
        //tells us in the console what errors appear when things go wrong
    }).catch((err) => console.error(err));

};