//team member options
const Employee = require('./lib/employee')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//node modules
const inquirer = require('inquirer');
const fs = require('fs');

function newRole() {
    inquirer.prompt([

        {
            type: 'list',
            name: 'memberOption',
            message: 'What role are you looking to add',
            choices: ['Manager', 'Engineer', 'Intern', 'quit']
        }
    ]).then((data) => {
        if(data.memberOption == 'Manager') {
            promptMan() 
        } else if(data.memberOption == 'Engineer') {
                promptEng()
        } else {
            promptInt()
        }
    })
}


function promptMan() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the members name?'
        },
        {

        }

    ])
}

newRole();