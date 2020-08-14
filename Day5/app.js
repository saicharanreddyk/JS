'use strict';

//  The nullish coalescing operator ?? provides a short syntax for selecting a first “defined” variable from the list.
//  x = a ?? b  --> x = (a !== null && a !== undefined) ? a : b;

// let firstName = null;
// let lastName;
// let nickName = "John";

// // show the first not-null/undefined value
// alert(firstName ?? lastName ?? nickName ?? "I am for Real");


// While loop

// let i = 0;

// print from 1 to 9
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// print 0, do while executes one no matter what the condition is. 
// do {
//     console.log(i);
//     i++;
// }
// while (i < 0)

// for loop 
// for (i = 0; i < 10; i++) {
//     console.log(i);
// }

// Browser will crash as it is infinite loop
// for (; ;) {
//     console.log(1);
// }

// for (let i = 0; i < 3; i++) {
//     alert(i); // 0, 1, 2
// }
// alert(i); // error, no such variable



// let sum = 0;

// while (true) {
//     let value = +prompt("Enter a number", '');
//     if (!value) break; // (*)
//     sum += value;
// }
// alert('Sum: ' + sum);


// for (let i = 0; i < 10; i++) {

//     // if true, skip the remaining part of the body
//     if (i % 2 == 0) continue;

//     alert(i); // 1, then 3, 5, 7, 9
// }


outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Value at coords (${i},${j})`, '');
        // if an empty string or canceled, then break out of both loops
        if (!input) break outer; // (*)
        // do something with the value...
    }
}
alert('Done!');
