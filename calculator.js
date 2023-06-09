//Calculator java.S
const x = prompt("x = "); //the semi colomn works for prompt and variables
let op = prompt("operation: ");
const y = prompt("y = ");
// IF statements dont forget '===' or '==' 
if (op === '+') {
    console.log(parseFloat(x) + parseFloat(y)); //here we use parseFloat()unlike when in python its just float
} else if (op === '-') {
    console.log(parseFloat(x) - parseFloat(y)); //also in js and elif statement(python = elif) come with {                  }
} else if (op === '*') {
    console.log(parseFloat(x) * parseFloat(y)); 
} else if (op === '/') {
    console.log(parseFloat(x) / parseFloat(y));
