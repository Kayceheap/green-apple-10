const inquirer = require ("inquirer");

const getEmployee = function(){
    inquirer
    .prompt({
        type: 'list',
        message: 'What is the type of employee?',
        name: 'empType',
        choices: ['Manager', 'Engineer', 'Intern']
    })

    .then(empType => {
       inquirer
        .prompt({
            type: 'input',
            message: "What is the employee's name?",
            name: "empName"

        }) .then(empName => {
            inquirer
            .prompt({
                type: 'input',
                message: "What is the employee's id?",
                name: "empId"
            }) .then(empId => {
                inquirer
                .prompt({
                    type: 'input',
                    message: "What is the employee's email?",
                    name: "empEmail"
                }).then(empEmail => {
                    console.log(empType, empName, empId, empEmail)
                })
            })
        })
    })
}

getEmployee();