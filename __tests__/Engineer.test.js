const Engineer = require('../lib/Engineer.js');
// jest.mock('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('John', 90, "John@gmail.com");

    expect(engineer.name).toBe('John');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.role).toBe('Engineer');
})

// test('gets engineer name', () => {
//     const engineer = new Engineer('John');

//     expect(engineer.name).toBe('John');
//     expect(engineer.getName()).toHaveProperty('name');
// });

// test('gets engineer id', () => {
//     const engineer = new Engineer('John');
//     engineer.id = 50;

//     expect(engineer.id).toEqual(expect.any(Number));
//     expect(engineer.getId()).toHaveProperty('id');
// });

// test('gets engineer email', () => {
//     const engineer = new Engineer('John');
//     engineer.email = "john@gmail.com"

//     expect(engineer.email).toEqual(expect.any(String));
//     expect(engineer.getEmail()).toHaveProperty('email');
// });

// test('gets engineer role', () => {
//     const engineer = new Engineer('John');

//     expect(engineer.getRole()).toBe('Engineer');
//     expect(engineer.getRole()).toHaveProperty('role');
// });

// test('gets engineer github', () => {
//     const engineer = new Engineer('John');
//     engineer.github = "johnhub";

//     expect(engineer.github).toEqual(expect.any(String));
//     expect(engineer.getGithub()).toHaveProperty('github');
// });