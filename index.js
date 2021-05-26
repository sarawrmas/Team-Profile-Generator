const inquirer = require("inquirer")

const promptUser = employeeArray => {
    if (!employeeArray) {
        employeeArray = [];
    }

    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("You must enter the employee's name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's ID number?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("You must enter the employee's ID number!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("You must enter the employee's email!");
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "role",
            message: "What is the employee's role?",
            choices: ["Manager", "Engineer", "Intern"],
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the office number?",
            when: (employeeRole) => employeeRole.role === "Manager",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("You must enter the office number!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is the employee's GitHub username?",
            when: (employeeRole) => employeeRole.role === "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("You must enter the employee's GitHub username!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "What is the name of the employee's school?",
            when: (employeeRole) => employeeRole.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("You must enter the employee's school name!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        }
    ])
    .then(employeeData => {
        employeeArray.push(employeeData);
        if (employeeData.confirmAddEmployee) {
            return promptUser(employeeArray);
        } else {
            return employeeArray;
        }
    })
};

promptUser()
.then(employeeArray => {
    console.log(employeeArray);
})