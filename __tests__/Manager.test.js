const Manager = require("../lib/Manager.js");
// jest.mock("../lib/Manager.js");

test("creates an manager object", () => {
    const manager = new Manager("John", 90, "John@gmail.com", 10);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.role).toEqual(expect.any(String));
})

test("gets manager name", () => {
    const manager = new Manager("John", 90, "John@gmail.com", 10);

    expect(manager.getName()).toBe("John");
});

test("gets manager id", () => {
    const manager = new Manager("John", 90, "John@gmail.com", 10);

    expect(manager.getId()).toBe(90);
});

test("gets manager email", () => {
    const manager = new Manager("John", 90, "John@gmail.com", 10);

    expect(manager.getEmail()).toBe("John@gmail.com", 10);
});

test("gets manager role", () => {
    const manager = new Manager("John", 90, "John@gmail.com", 10);

    expect(manager.getRole()).toBe("Manager");
    console.log(manager);
});