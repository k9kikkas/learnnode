
import inquirer from 'inquirer';

const answers = await inquirer.prompt([
  {
    type: 'confirm',
    name: 'play_game',
    message: "Have you played RDR2?",
  }, 
  {
    type: 'input',
    name: 'user_name',
    message: "If you haven't, fuck you. What's your username?",
  }, 
  {
    type: 'password',
    name: 'pass_word',
    message: "What's your password?",
    mask: '*',
  }, 
  {
    type: 'number',
    name: 'played_hours',
    message: "How many hours do you have on the game?",
  }, 
  {
    type: 'list',
    name: 'fav_char',
    message: "Who is your favourite character in the gang?",
    choices: [ 
      'Arthur',
      'Dutch',
      'Sadie',
      'John',
      'Bill',
      'Micah',
      'Abigail',
      'Susan',
      'Karen',
      'Kieran',
      'Hosea',
      'Lenny',
      'Swanson',
      'Jack',
      'Javier',
      'Charles',
      'Sean',
      'Tilly',
    ],
  }, 
  {
    type: 'checkbox',
    name: 'game_ending',
    message: "What endings have you completed?",
    choices: [
      {name: 'None', checked: true}, // doesnt work D: how tf do i set a box to be checked by default
      new inquirer.Separator('= Helping John ='),
      'Low honour',
      'High honour',
      new inquirer.Separator('= Getting the money back ='),
      'Low honour',
      'High honour',
    ]
  }, 
  {
    type: 'expand',
    name: 'fav_town',
    message: "Favourite town in the game?",
    choices: [
      {name: 'Valentine', key: 'v'},
      {name: 'Rhodes', key: 'r'},
      {name: 'Saint Denis', key: 'd'},
      {name: 'Strawberry', key: 's'},
      {name: 'Annesburg', key: 'a'},
      {name: 'Blackwater', key: 'b'},
      {name: 'Tumbleweed', key: 't'},
      {name: 'Armadillo', key: 'm'},
      {name: 'Van Horn', key: 'o'}
    ]
  }, 
  {
    type: 'rawlist',
    name: 'game_review',
    message: "Thoughts on the game?",
    choices: [
      'Incredible',
      'Good',
      'Not bad',
      'Bad',
      'Disgusting'
    ]
  }, 
  {
    type: 'editor',
    name: 'extra_notes',
    message: "Do you have any notes?",
  }, 
]);


console.log(JSON.stringify(answers, null, '  '));