const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
var MarkdownIt = require('markdown-it');
const writeFileAsync = util.promisify(fs.writeFile);

const userInput = () =>
    inquirer.prompt([
        {
            type: "input",
            message: "Enter your full name:",
            name: "owner",
        },
        {
            type: "input",
            message: "Enter the name of your project:",
            name: "projectname",
        },
        {
            type: "input",
            message: "Enter a brief description of your project:",
            name: "description",
        },
        {
            type: "input",
            message: "Enter the installation instructions:",
            name: "installation",
        },
        {
            type: "input",
            message: "Enter the usage instructions:",
            name: "usage",
        },
        {
            type: "input",
            message: "Enter guidelines for contributing to the project:",
            name: "contributors",
        },
        {
            type: "input",
            message: "Enter a brief description of your project:",
            name: "description",
        },
        {
            type: "input",
            message: "Enter test instructions:",
            name: "test",
        }
    ]);

const generateReadme = (answers) => {
    md = new MarkdownIt(answers);
    const projectOwner = md.render("# Project Owner");
    const owner = md.renderInline(answers.owner);
    const projectName = md.render('# Project Name');
    const project = md.renderInline(answers.projectname);
    const projectDesc = md.render("Project Description");
    const description = md.render(answers.description);
    const installationInst = md.render("# Installation Instructions");
    const usageInfo
    const contribGuidelines
    const testInst
    const license
    const githubUser
    const emailAddress
    console.log(projectTitle);
}
userInput()
    .then((answers) => writeFileAsync('ReadMe.md', generateReadme(answers)))



// const generateReadme = (answers) =>



// sections: Description, Table of Contents (links to sections), Installation, Usage, License, Contributing, Tests, and Questions

// Take inputs to create object (inquirer package .prompt then response function) -> create file -> append to file -> read file to create html