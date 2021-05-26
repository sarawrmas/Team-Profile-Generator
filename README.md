# User Story
AS A manager  
I WANT to generate a webpage that displays my team's basic info  
SO THAT I have quick access to their emails and GitHub profiles

# Acceptance Criteria
GIVEN a command-line application that accepts user input

WHEN I am prompted for my team members and their information  
THEN an HTML file is generated that displays a nicely formatted team roster based on user input

WHEN I click on an email address in the HTML  
THEN my default email program opens and populates the TO field of the email with the address

WHEN I click on the GitHub username  
THEN that GitHub profile opens in a new tab

WHEN I start the application  
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

WHEN I enter the team manager’s name, employee ID, email address, and office number  
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN I select the engineer option  
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option  
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

WHEN I decide to finish building my team  
THEN I exit the application, and the HTML is generated

## INSTRUCTIONS:
* npm init w/ "jest" as test value
* npm install inquirer
* npm install jest --save-dev
* invoke using command: node index.js

# Classes, Properties, and Methods
* Employee
    * name
    * id
    * email
    * getName()
    * getId()
    * getEmail()
    * getRole() (Returns 'Employee')

* Manager (in addition to Employee's properties and methods)
    * officeNumber
    * getRole() (Overridden to return 'Manager')

* Engineer (in addition to Employee's properties and methods)
    * github (GitHub username)
    * getGithub()
    * getRole() (Overridden to return 'Engineer')

* Intern (in addition to Employee's properties and methods)
    * school
    * getSchool()
    * getRole() (Overridden to return 'Intern')


**The tests for these classes must all pass!!**

# Validation
NOT a requirement, but encouraged to add validation to ensure user input is in proper format