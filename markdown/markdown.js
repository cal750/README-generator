//function to create the contents of README
function createMarkdown(answers) {
    return  `
    ## Title
    ${answers.Title}
  
    ## Description 
    ${answers.Description}
    
    ## Table of Contents
    1. [Installation](#Installation)
    2. [Usage](#Usage)
    3. [License](#License)
    4. [Contributing](#Contributing)
    5. [Tests](#Tests)
    6. [Github](#Questions)
  
    ## Installation
    ${answers.Installation}
  
    ## Usage
    ${answers.Usage}
  
    ## License
    ${answers.License}
  
    ## Contributing
    ${answers.Contributing}
  
    ## Tests
    ${answers.Tests}
  
    ## Questions
    ${answers.Questions}
    ${answers.LinkedIn}
    ${answers.Email}
    
  `;
  }
  
  //exports the data in the file for use in the index.js
  module.exports = {createMarkdown};