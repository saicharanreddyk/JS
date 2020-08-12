// Variables and working with them

let message;
message = "Hello World";
message = 'I am changed from Hello World to Hello Java Script'; // old value is removed from the location and changed with new value 

// let message; // Uncaught SyntaxError: Identifier 'message' has already been declared in the console

let gereeting;
gereeting = message;

// let message, greeting, information; // Single line declarations also possible

console.log(message);
console.log(gereeting);

// Derclarations and common Naming Convesntions. 

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

// alert($ + _); // 3


(function () {
    'use strict';
    let num = 5; // error: num is not defined without let
})()

// Declare a CONST 

// Tasks 

let name;
let admin;

name = "John";
admin = name;
alert(admin);

let firstName = "Ilya";

alert(`hello ${1}`); // ?
alert(`hello ${"firstName"}`); // ?
alert(`hello ${firstName}`); // ?