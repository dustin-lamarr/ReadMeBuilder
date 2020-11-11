const inquirer = require('inquirer');
// const projectTitle
// const projectDesc
// const installationInst
// const usageInfo
// const contribGuidelines
// const testInst
// const license
// const githubUser
// const emailAddress

inquirer
.prompt([
    {
        type: "input",
        message: "Enter your full name:",
        name: "name",
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
    }
    {
        type: "input",
        message: "Enter the installation instructions:",
        name: "installation",
    }
    {
        type: "input",
        message: "Enter the usage instructions:",
        name: "usage",
    }
    {
        type: "input",
        message: "Enter guidelines for contributing to the project:",
        name: "contributors",
    }
    {
        type: "input",
        message: "Enter a brief description of your project:",
        name: "description",
    }
    {
        type: "input",
        message: "Enter test instructions:",
        name: "test",
    }
])


// sections: Description, Table of Contents (links to sections), Installation, Usage, License, Contributing, Tests, and Questions

// Take inputs to create object (inquirer package .prompt then response function) -> create file -> append to file -> read file to create html