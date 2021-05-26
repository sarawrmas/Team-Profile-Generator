const generateCards = employeeArray => {
    return `
        ${employeeArray
            .filter(({ role }) => role === "Manager")
            .map(({ name, role, id, email, officeNumber }) => {
                return `
                <div class="card">
                    <h2>${name}</h2>
                    <h3>${role}</h3>
                    <p>ID: ${id}</p>
                    <p>Email: <a href="mailto:${email}">${email}</a></p>
                    <p>Office Number: ${officeNumber}</p>
                </div>
                `
            })
        }
        ${employeeArray
            .filter(({ role }) => role === "Engineer")
            .map(({ name, role, id, email, github }) => {
                return `
                <div class="card">
                    <h2>${name}</h2>
                    <h3>${role}</h3>
                    <p>ID: ${id}</p>
                    <p>Email: <a href="mailto:${email}">${email}</a></p>
                    <p>GitHub: <a href="https://github.com/${github}">${github}</a></p>
                </div>
                `
            })
        }
        ${employeeArray
            .filter(({ role }) => role === "Intern")
            .map(({ name, role, id, email, school }) => {
                return `
                <div class="card">
                    <h2>${name}</h2>
                    <h3>${role}</h3>
                    <p>ID: ${id}</p>
                    <p>Email: <a href="mailto:${email}">${email}</a></p>
                    <p>School: ${school}</p>
                </div>
                `
            })
        }
    `
}

module.exports = employees => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>My Team</h1>
        <main>
        ${generateCards(employees)}
        </main>
    </body>
    </html>
    `
}