let bool = true;
console.log(bool);
bool = false;
console.log(bool);

bool = true && false; // AND - if true and true then true but everything else is false
bool = false && true;
bool = false && false;
bool = true && true;
console.log(bool);

bool = true || false; // OR - if either of them is true then it true and if both true then true again and if none then false
bool = false || true;
bool = false || false;
bool = true || true;
console.log(bool);

bool = !true; // NOT - if i say something is false then its false if i say something is not false its true
console.log(bool);
bool = !false;
console.log(bool);

bool = (true && false || true) && !(false || true && false); // this is what hell looks like
console.log(bool);

bool = 10 > 5;
//jne
bool = 10 == 10;
bool = '10' == 10; // non strict will convert and check
bool = '10' === 10; //strict will check if types match before values
bool = 10 >= 10;
bool = '10' != 10;
bool = '10' !== 10;
bool = [] == '';
bool = [1, 2, 3] == 1;

console.log(bool);