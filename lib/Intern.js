const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.role = "Intern";
    }
};

module.exports = Intern;