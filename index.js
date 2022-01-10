const inquirer = require("inquirer");
const Manager = require("./lib/manager.js");
const Intern = require("./lib/intern.js");
const Engineer = require("./lib/engineer.js");
const employees = []

const getEmployee = function () {
    inquirer
        .prompt({
            type: 'list',
            message: 'What is the type of employee?',
            name: 'empType',
            choices: ['Manager', 'Engineer', 'Intern']
        })

        .then(({ empType }) => {
            inquirer
                .prompt({
                    type: 'input',
                    message: "What is the employee's name?",
                    name: "empName"

                }).then(({ empName }) => {
                    inquirer
                        .prompt({
                            type: 'input',
                            message: "What is the employee's id?",
                            name: "empId"
                        }).then(({ empId }) => {
                            inquirer
                                .prompt({
                                    type: 'input',
                                    message: "What is the employee's email?",
                                    name: "empEmail"
                                }).then(({ empEmail }) => {
                                    console.log(empType);

                                    if (empType === "Manager") {

                                        inquirer
                                            .prompt({
                                                type: 'input',
                                                message: "What is their office number?",
                                                name: "officeNumber"
                                            }).then(({ officeNumber }) => {
                                                const manager = new Manager(empName, empId, empEmail, officeNumber);
                                                employees.push(manager)
                                                addAnother();

                                            })
                                    }
                                    else if (empType === "Intern") {
                                        inquirer
                                            .prompt({
                                                type: 'input',
                                                message: "What is their school?",
                                                name: "schoolName"
                                            }).then(({ schoolName }) => {
                                                const intern = new Intern(empName, empId, empEmail, schoolName);
                                                employees.push(intern)
                                                addAnother();
                                                console.log(intern);

                                            })
                                    }
                                    else {
                                        inquirer
                                            .prompt({
                                                type: 'input',
                                                message: "What is their GitHub?",
                                                name: "github"
                                            }).then(({ github }) => {
                                                const engineer = new Engineer(empName, empId, empEmail, github);
                                                employees.push(engineer)
                                                addAnother();
                                                console.log(engineer);

                                            })
                                    }

                                })
                        })
                })
        })
}

const addAnother = function () {
    inquirer
        .prompt({
            type: 'input',
            message: "Would you like to enter another employee?",
            name: "moreEmployees"
        }).then(({ moreEmployees }) => {
            if (moreEmployees.toUpperCase() === "Y") {
                getEmployee();
            }
            else {
                createhtml();
            }
        })
}
const createhtml = function () {
    console.log(employees)
}
getEmployee();
