const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
    const employee = new Employee("John", 90, "John@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test("gets employee name", () => {
    const employee = new Employee("John", 90, "John@gmail.com");

    expect(employee.getName()).toBe("John");
});

test("gets employee id", () => {
    const employee = new Employee("John", 90, "John@gmail.com");

    expect(employee.getId()).toBe(90);
});

test("gets employee email", () => {
    const employee = new Employee("John", 90, "John@gmail.com");

    expect(employee.getEmail()).toBe("John@gmail.com");
});

test("gets employee role", () => {
    const employee = new Employee("John", 90, "John@gmail.com");

    expect(employee.getRole()).toBe("Employee");
    console.log(employee);
});