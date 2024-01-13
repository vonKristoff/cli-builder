import inquirer from "inquirer";

const a = await inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'enter your handle'
    }
])