const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
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
  return `# Project Owner 
  ## ${answers.owner}\n` +
   `\n # Project Name
   ## ${answers.project}\n` +
   `# Table of Contents:
  1. [Project Description](#Product-Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [Questions](#Questions?)
  7. [Licence](#Licence)` +
    `\n ## Project Description
    ${answers.description}\n` +
    `\n ## Installation
    ${answers.install}\n` +
    `\n ## Usage
    ${answers.usage}\n` +
    `\n ## Contributing
    ${answers.contributor}\n` +
    `\n ## Tests
    ${answers.test}\n` +
    `\n ## Questions?
    <${answers.github}>\n
    <${answers.email}>\n` +
    `\n ## Licence
    ${answers.license}\n`

}

inquirer.prompt(questions)
    .then((answers) => writeFileAsync('README.md', readme(answers)))
    // .then((answers) => console.log(answers))
    .catch((err) => console.error(err))





// sections: Description, Table of Contents (links to sections), Installation, Usage, License, Contributing, Tests, and Questions

// Take inputs to create object (inquirer package .prompt then response function) -> create file -> append to file -> read file to create html