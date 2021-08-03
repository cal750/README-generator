//adding my constants that allow communication to other files in the repository
const inquirer = require('inquirer');
const fs = require('fs')
const markdown = require('markdown');
const {createMarkdown} = require('./markdown/createMarkdown');

const writeFileAsync = markdown.promisify(fs.writeFile)