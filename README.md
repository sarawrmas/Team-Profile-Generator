# Team Profile Generator

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Demonstration](#demonstration)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Credits](#credits)

## Description
As a manager, you want to generate a webpage that displays your team's basic info so that you can have quick access to their information. This is where the Team Profile Generator comes in.

Simply respond to a few command line prompts, adding as many employees as you'd like, and a styled HTML file will be generated for you.

The HTML file will contain separate cards with all of your employees' info, including their
* name
* role
* employee ID
* email
* office number (manager)
* GitHub profile (engineer)
* school name (intern)

Clicking on a given employee's email will open the email app of your choice with their email already filled in the recipient field. Clicking on an engineer's GitHub name will take you directly to their GitHub profile.

With all of your employees' contact information in one place, it is easy to find whatever information you are looking for, all in one webpage.

## Installation
1. **Copy Link:** Hit the "Code" button within this GitHub repo to copy link
1. **Clone:** Use the command "git clone *paste link here*"
1. **NPM:** Use the command "npm init" to install Node Package Manager
1. **Inquirer:** Use the command "npm install inquirer" to get npm's inquirer package
1. **Jest:** Use the command "npm install jest --save-dev" (make sure to enter "jest" as the test value in package.json)

## Usage
Once software is downloaded and Node packages are initialized, it's time to get started!

Within the directory for this project, start the game by using the command "node index.js". From there, you will be prompted to first enter the information for the manager, and then you'll be taken to the main menu where you can either add an engineer, add an intern, or end the application and generate your HTML file.

Once completed, navigate to the 'dist' subdirectory to find your new team profile!

## Demonstration
Watch [this demo](https://www.youtube.com/watch?v=) to see the Team Profile Generator in action.

## Contributing
If you see something in the generator that could be improved, such as additional functionality, features, or even styling, you can submit bug and feature requests, or make pull requests with updated code so I can review your changes.

## Tests
The Employee test file checks for the creation of a new employee.

The Manager, Engineer, and Intern test files check for the creation of a new employee for its specified role, extended from the Employee file, and that their respective properties and methods work properly.

To run a test, use the command "npm run test *file name*" to test only one file, or "npm run test" to run all tests at once.

## Questions
Have questions about this project?  
GitHub: https://github.com/sarawrmas  
Email: sara.m.adamski@gmail.com

## Credits
Sara Adamski