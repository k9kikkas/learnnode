
import inquirer from 'inquirer';

const answers = await inquirer.prompt([
  {
    type: 'input',
    name: 'first_name',
    message: "What's your first name",
  }, 
]);

console.log(JSON.stringify(answers, null, '  '));