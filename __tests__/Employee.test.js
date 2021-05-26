const Employee = require('../lib/Employee.js');
// jest.mock('../lib/Employee.js');

test('gets employee name', () => {
    const employee = new Employee('John', 50, 'john@gmail.com', 'Employee');

    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toBe('Employee');
});

// test('gets employee id', () => {
//     const employee = new Employee('John');
//     employee.id = 50;

//     expect(employee.id).toEqual(expect.any(Number));
//     expect(employee.getId()).toHaveProperty('id');
// });

// test('gets employee email', () => {
//     const employee = new Employee('John');
//     employee.email = "john@gmail.com"

//     expect(employee.email).toEqual(expect.any(String));
//     expect(employee.getEmail()).toHaveProperty('email');
// });

// test('gets employee role', () => {
//     const employee = new Employee('John');

//     expect(employee.getRole()).toBe('Employee');
//     expect(employee.getRole()).toHaveProperty('role');
// });