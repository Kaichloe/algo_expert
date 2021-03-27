const compose = (a, b) => value => a(b(value));

const c = compose(2,4)
// console.log(c);
// console.log(c(2) === 2(4(2)))
c(2) === a(b(2));

const a = (input) => input.toUpperCase();
const b = (input) => input.slice(0,4);

const compose = (a, b) => input => a(b(input));

// thought process
const a = (input) => input.toUpperCase();
const b = (input) => input.slice(0,5);
const compose = (a, b) => input => a(b(input));
const x = "hello world "

const c = compose(a,b);
c(x) === a(b(x)) // true as both returns "HELLO"