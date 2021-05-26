const Intern = require("../lib/Intern.js");
// jest.mock("../lib/Intern.js");

test("creates an intern object", () => {
    const intern = new Intern("John", 90, "John@gmail.com", "UCLA");

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.role).toEqual(expect.any(String));
})

test("gets intern name", () => {
    const intern = new Intern("John", 90, "John@gmail.com", "UCLA");

    expect(intern.getName()).toBe("John");
});

test("gets intern id", () => {
    const intern = new Intern("John", 90, "John@gmail.com", "UCLA");

    expect(intern.getId()).toBe(90);
});

test("gets intern email", () => {
    const intern = new Intern("John", 90, "John@gmail.com", "UCLA");

    expect(intern.getEmail()).toBe("John@gmail.com");
});

test("gets intern role", () => {
    const intern = new Intern("John", 90, "John@gmail.com", "UCLA");

    expect(intern.getRole()).toBe("Intern");
    console.log(intern);
});

test("gets intern school", () => {
    const intern = new Intern("John", 90, "John@gmail.com", "UCLA");

    expect(intern.getSchool()).toBe("UCLA");
})