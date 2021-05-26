const Intern = require('../lib/Intern.js');
// jest.mock('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('John', 90, "John@gmail.com");

    expect(intern.name).toBe('John');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.role).toBe('Intern');
})

// test('gets intern name', () => {
//     const intern = new Intern('John');

//     expect(intern.name).toBe('John');
//     expect(intern.getName()).toHaveProperty('name');
// });

// test('gets intern id', () => {
//     const intern = new Intern('John');
//     intern.id = 50;

//     expect(intern.id).toEqual(expect.any(Number));
//     expect(intern.getId()).toHaveProperty('id');
// });

// test('gets intern email', () => {
//     const intern = new Intern('John');
//     intern.email = "john@gmail.com"

//     expect(intern.email).toEqual(expect.any(String));
//     expect(intern.getEmail()).toHaveProperty('email');
// });

// test('gets intern role', () => {
//     const intern = new Intern('John');

//     expect(intern.getRole()).toBe('Intern');
//     expect(intern.getRole()).toHaveProperty('role');
// });

// test('gets intern school', () => {
//     const intern = new Intern('John');
//     intern.school = "UCLA";

//     expect(intern.school).toEqual(expect.any(String));
//     expect(intern.getSchool()).toHaveProperty('school');
// });