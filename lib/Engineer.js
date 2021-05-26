const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.role = "Engineer";
    }
};

module.exports = Engineer;