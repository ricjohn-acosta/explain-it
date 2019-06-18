"use strict"; //Switches the engine to the "modern" mode, changing the behaviour of some built-in features.

console.log('hello');

let number; //Can also use var something to declare a variable.
number = 1;
console.log(number);

const myBirthday = '30.05.1998' //Use const for declaring a constant ariable.
console.log(myBirthday);

let n1 = 123; //No need for variable declarations
console.log(n1);
let n2 = "asd"
console.log(`My name is ${n2}`); //Can 'embed'/'wrap' a string using backticks.
let n4 = true; //Variable can be boolean.
console.log(n4);
let n5 = null; //Null type.
console.log(n5);
let n6 = undefined; //Undefined type.
console.log(n6);

console.log(typeof n1); //Shows data type of argument. In this case, n1 is a number.
console.log(typeof n6);