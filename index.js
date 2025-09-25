function hello() {
    console.log('hello...woorld');
}

hello();
hello();

function helloName(name) {
    console.log(`Hello ${name}!`);
};

helloName('Marta');
helloName('Kirke');
helloName('Danchik');
helloName('Robin');

function hi(name = 'who are you', age = 'what') {
    console.log(`Hi ${name} you are ${age} years old`);
}
hi('Marta', 17);
hi('Kirke', 21);
hi('Danchik', 17);
hi('Robin', 17);
hi();

let sum = function (a, b) {
    return a + b;
}

let answer = sum(4, 5);
console.log(answer);
console.log(sum(6, 10));
sum(5, 6);

let sub = (a, b) => {
    return a - b;
}
console.log(sub(6, 10));

let mult = (a, b) => a * b;
console.log(mult(6, 10));

let root = a => a * a;
console.log(root(6, 10));

let cool = () => console.log('cool');
cool();

let awesome = {
    party: function () {
        console.log('I say Disco You say Party');
    },
    cool: () => console.log('Disco Disco'),
    nice() {
        console.log('Party Party');
    }
};

awesome.party();
awesome.cool();
awesome.nice();