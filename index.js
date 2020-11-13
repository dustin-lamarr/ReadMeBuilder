const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
var MarkdownIt = require('markdown-it');
const writeFileAsync = util.promisify(fs.writeFile);

var questions = [
        {
            type: "input",
            message: "Enter your full name:",
            name: "owner",
        },
        {
            type: "input",
            message: "Enter the name of your project:",
            name: "project",
        },
        {
            type: "input",
            message: "Enter a brief description of your project:",
            name: "description",
        },
        {
            type: "input",
            message: "Enter the installation instructions:",
            name: "install",
        },
        {
            type: "input",
            message: "Enter the usage instructions:",
            name: "usage",
        },
        {
            type: "input",
            message: "Enter guidelines for contributing to the project:",
            name: "contributor",
        },
        {
            type: "input",
            message: "Enter test instructions:",
            name: "test",
        },
        {
            type: "input",
            message: "Enter Git Hub URL: ",
            name: "github",
        },
        {
            type: "input",
            message: "Enter Email Address: ",
            name: "email",
        },
        {
            type: "input",
            message: "Choose license type: ",
            name: "license",
        },
    ]
const readme = (answers) => {
  // answers = JSON.stringify(answers, null, '  ')
  return `# Project Owner 
   ${answers.owner}\n` +
   ` # Project Name
    ${answers.project}\n` +
    ` # Project Description
    ${answers.description}\n` +
    ` # Installation Instructions
    ${answers.install}\n` +
    ` # Usage Instructions
    ${answers.usage}\n` +
    ` # Contributor Guidelines
    ${answers.contributor}\n` +
    ` # Test Instructions
    ${answers.test}\n` +
    ` # Git Hub Repository
    ${answers.github}\n` +
    ` # Contact Me
    ${answers.email}\n` +
    ` # Project Licence
    ${answers.license}\n`

}

// readme();
inquirer.prompt(questions)
    .then((answers) => writeFileAsync('test.md', readme(answers)))
    // .then((answers) => console.log(answers))
    .catch((err) => console.error(err))





// sections: Description, Table of Contents (links to sections), Installation, Usage, License, Contributing, Tests, and Questions

// Take inputs to create object (inquirer package .prompt then response function) -> create file -> append to file -> read file to create html