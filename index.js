// TODO: Include packages needed for this application
const fs=require("fs");
const inquirer=require("inquirer");


inquirer.prompt([
    {type: "input", name: "title", message: "What is the name of your project?", default: "Project Title", validate: function (answer) {
        if (answer.length <= 2) {
            console.log("\n","Please use a valid title with more than 2 characters")
        } else {
            return true;
        }
    }},
    {type: "input", name: "projectDesc", default: "description", message: "Description of your project."},
    {type: "input", name: "installationSteps", default: "Project Title", message: "Do you have an installation steps that needs to be done?"},
    {type: "input", name: "includeCredits", default: "Credits", message: "Do you want to give credit to someone?"},
    {type: "list", choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"], name: "includeLicenses", message: "What licenses are required for your project?"},
    {type: "input", name: "dependencies", default: "dependencies", message: "What command should be run to install dependencies?"},
    {type: "input", name: "test", default: "run test", message: "What command should be run to run tests?"},
    {type: "input", name: "usage", default: "usage", message: "What does the user need to know about using the repo?"},
    {type: "input", name: "contributions", default: "contributions", message: "What does the user need to know about contributing to your repo?"},
    {type: "input", name: "gitUsername", default: "alkathos", message: "What is your GitHub username?"},
    {type: "input", name: "email", default: "developer@gmail.com", message: "What's your email address?"},
]).then(result => {
    const {title, projectDesc,installationSteps,includeCredits,includeLicenses,dependencies,test,usage,contributions,gitUsername,email}= result;
    /*------------------------This will help create the badge for the ExampleREADME file------------------------------------------------- */
    let badge = includeLicenses;
    badge1 = "";
    function addBadge() {
        if (badge === "MIT") {
            badge1 = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        } else if (badge === "APACHE 2.0") {
            badge1 = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        } else if (badge === "GPL 3.0") {
            badge1 = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
        } else if (badge === "BSD 3") {
            badge1 = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
        } else {
        ``
    }};
    addBadge();
    //Generates the ExampleREADME file
    const readme = `# ${title} ${badge1}

## Description
${projectDesc}



## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation
${installationSteps}

## Usage
Please make sure that you install ${dependencies} and then you can 
${usage}

## Credits
${includeCredits}

## License
${includeLicenses}

## Badges
    
## How to Contribute
${contributions}

## Tests

${test}

## Questions
If you want to collaborate with me in future projects or want to better this repo. You can contact me via email ${email}.
You can see my other works at GitHub. My username is ${gitUsername}!`;

    fs.writeFile("ExampleREADME.md",readme, function(error) {
        if(error) {
            console.log("There was an error")
        } else {
            console.log("README file was created!")
        }
    })
}) 