const fs = require("fs");
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
    var html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
      <title>Document</title>
  </head>
  <body>
  <h1>The Team</h1>
  <section class="container">
      <div class ="row">
          <div class ="col d-flex flex-row" >`;

    for (var i = 0; i < employees.length; i++) {

       var card = `<div class="card" style="width: 20rem;">
            <div class="card-body">
                <h5 class="card-title">${employees[i].getName()}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${employees[i].getRole()}</h6>
                <p class="card-text">Id: ${employees[i].getId()}</p>
                <a href="mailto:${employees[i].getEmail()}" class="card-link">Email: ${employees[i].getEmail()}</a>`;
                if (employees[i] instanceof Manager) {
                    const officeNumber = `<p class="card-text">Office Number: ${employees[i].getOfficeNumber()}</p>`;
                    card += officeNumber;
                } else if (employees[i] instanceof Intern) {
                    const school = `<p class="card-text">School Name: ${employees[i].getSchool()}</p>`;
                    card += school;

                } else if (employees[i] instanceof Engineer) {
                    const github = `<div><a href="https://github.com/${employees[i].getGithub()}" class="card-link">GitHub: ${employees[i].getGithub()}</a></div>`;
                    card += github;
                }
            
                
            const endOfCard =`</div>
        </div>`
        card += endOfCard;
        html += card;
    }
    //     <div class="card" style="width: 18rem;">
    //       <div class="card-body">
    //         <h5 class="card-title">Card title</h5>
    //         <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    //         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //         <a href="#" class="card-link">Card link</a>
    //         <a href="#" class="card-link">Another link</a>
    //       </div>
    //     </div>
    const end = `</div>
      </div>
  </section>
      
  </body>
  </html>`

  html += end;
  fs.writeFile("./dist/index.html", html, function(err){});
}
getEmployee();
