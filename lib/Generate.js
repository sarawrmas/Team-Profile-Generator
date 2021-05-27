const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./Manager.js");
const Engineer = require("./Engineer.js");
const Intern = require("./Intern.js");

function Generate() {
    this.manager = [];
    this.engineer = [];
    this.intern = [];
}

Generate.prototype.promptManager = function() {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "To start, please enter the manager's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`You must enter a name!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Employee ID:",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log(`You must enter an ID!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Email:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log(`You must enter an email!`);
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Office Number:",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("You must enter the office number!");
                    return false;
                }
            }
        }
    ])
    .then(({ name, id, email, officeNumber }) => {
        this.manager.push(new Manager(name, id, email, officeNumber));
        this.initMainMenu();
    })
};

Generate.prototype.initMainMenu = function() {
    return inquirer.prompt([
        {
            type: "list",
            name: "menu",
            message: "What would you like to do?",
            choices: ["Add Engineer", "Add Intern", "No more employees - Generate my page!"]
        }
    ])
    .then(({ menu }) => {
        if (menu === "Add Engineer") {
            this.promptEngineer();
        }
        if (menu === "Add Intern") {
            this.promptIntern();
        }
        if (menu === "No more employees - Generate my page!") {
            console.log(this.manager)
            console.log(this.engineer)
            console.log(this.intern)
            this.generateHTML();
        }
    })
};

Generate.prototype.promptEngineer = function() {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Engineer name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`You must enter a name!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Employee ID:",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log(`You must enter an ID!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Email:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log(`You must enter an email!`);
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "GitHub Username:",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("You must enter a GitHub username!");
                    return false;
                }
            }
        }
    ])
    .then(({ name, id, email, github }) => {
        this.engineer.push(new Engineer(name, id, email, github));
        this.initMainMenu();
    })
};

Generate.prototype.promptIntern = function() {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Intern's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`You must enter a name!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Employee ID:",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log(`You must enter an ID!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Email:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log(`You must enter an email!`);
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Name of School:",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("You must enter a school name!");
                    return false;
                }
            }
        }
    ])
    .then(({ name, id, email, school }) => {
        this.intern.push(new Intern(name, id, email, school));
        this.initMainMenu();
    })
};


Generate.prototype.generateHTML = function () {
        fs.writeFile('./dist/index.html',
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <h1>My Team</h1>
            <main>
            ${this.generateManager()}
            ${this.generateEngineer()}
            ${this.generateIntern()}
            </main>
        </body>
        </html>
        `,
        'utf8', err => {
            if (err) {
                throw (err);
            }
            console.log('File created!');
    });
};


Generate.prototype.generateManager = function() {
    return `
        ${this.manager
            .map(({ name, role, id, email, officeNumber }) => {
                return `
                <div class="card">
                    <h2>${name}</h2>
                    <h3>${role}</h3>
                    <p>ID: ${id}</p>
                    <p>Email: <a href="mailto:${email}">${email}</a></p>
                    <p>Office Number: ${officeNumber}</p>
                </div>
                `
            })
        }
    `
};

Generate.prototype.generateEngineer = function() {
    return `
        ${this.engineer
            .map(({ name, role, id, email, github }) => {
                return `
                <div class="card">
                    <h2>${name}</h2>
                    <h3>${role}</h3>
                    <p>ID: ${id}</p>
                    <p>Email: <a href="mailto:${email}">${email}</a></p>
                    <p>GitHub: <a href="https://github.com/${github}">${github}</a></p>
                </div>
                `
            })
        }
    `
};

Generate.prototype.generateIntern = function() {
    return `
        ${this.intern
            .map(({ name, role, id, email, school }) => {
                return `
                <div class="card">
                    <h2>${name}</h2>
                    <h3>${role}</h3>
                    <p>ID: ${id}</p>
                    <p>Email: <a href="mailto:${email}">${email}</a></p>
                    <p>School: ${school}</p>
                </div>
                `
            })
        }
    `
};



module.exports = Generate;