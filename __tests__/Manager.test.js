const Manager = require('../lib/Manager.js');
jest.mock('../lib/Manager.js');

test('gets manager name', () => {
    const manager = new Manager('John');

    expect(manager.name).toBe('John');
    expect(manager.getName()).toHaveProperty('name');
});

test('gets manager id', () => {
    const manager = new Manager('John');
    manager.id = 50;

    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.getId()).toHaveProperty('id');
});

test('gets manager email', () => {
    const manager = new Manager('John');
    manager.email = "john@gmail.com"

    expect(manager.email).toEqual(expect.any(String));
    expect(manager.getEmail()).toHaveProperty('email');
});

test('gets manager role', () => {
    const manager = new Manager('John');

    expect(manager.getRole()).toBe('Manager');
    expect(manager.getRole()).toHaveProperty('role');
});

test('gets manager github', () => {
    const manager = new Manager('John');
    manager.officeNumber = 89;

    expect(manager.officeNumber).toEqual(expect.any(Number));
});