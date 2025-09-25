let text = 'Hello ';
text = text + 'Joosep!';
console.log(text);
text = "Don't use double quotes unless needed";
text = 'Don\'t use double\t quotes\n unless needed';
console.log(text);

let name = 'Tide';
let age = 27;
let sexuality = 'gay';
text = 'Your name is ' + name + ' and you are ' + age + ' years old and your sexuality is ' + sexuality + '!';
console.log(text);

text = `Your name is ${name}
 and you are ${age} years old
  and your sexuality is ${sexuality}!`;
console.log(text);

console.log(text.toUpperCase());
text = text.toUpperCase();
console.log(text);