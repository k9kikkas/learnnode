let obj = {
    name: 'Kierian',
    age: 17,
    sexuality: 'bi',
    fruits: ['kiwi', 'lemon', 'cherry'],
    cat: {
        name: 'Carp',
        age: 1,
        gender: 'Male',
    },
    parentName: 'Freddy',
    //parent-name: 'ash', not allowed because -
    //2ash: 'ash:, not allowed to start with number
    'parent-name': 'Phillip',
    '2asd': 'ash',
    'somethings': 'sadji',
};

console.log(obj);
console.log(obj.name);
console.log(obj.fruits[1]);
console.log(obj.cat.name);
console.log(obj['parent-name']);
console.log(Object.keys(obj));