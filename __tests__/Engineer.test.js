const Engineer = require("../lib/Engineer.js");
// jest.mock("../lib/Engineer.js");

test("creates an engineer object", () => {
    const engineer = new Engineer("John", 90, "John@gmail.com", "JohnHub");

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.role).toEqual(expect.any(String));
})

test("gets engineer name", () => {
    const engineer = new Engineer("John", 90, "John@gmail.com", "JohnHub");

    expect(engineer.getName()).toBe("John");
});

test("gets engineer id", () => {
    const engineer = new Engineer("John", 90, "John@gmail.com", "JohnHub");

    expect(engineer.getId()).toBe(90);
});

test("gets engineer email", () => {
    const engineer = new Engineer("John", 90, "John@gmail.com", "JohnHub");

    expect(engineer.getEmail()).toBe("John@gmail.com");
});

test("gets engineer role", () => {
    const engineer = new Engineer("John", 90, "John@gmail.com", "JohnHub");

    expect(engineer.getRole()).toBe("Engineer");
    console.log(engineer);
});

test("gets engineer github", () => {
    const engineer = new Engineer("John", 90, "John@gmail.com", "JohnHub");

    expect(engineer.getGithub()).toBe("JohnHub");
})