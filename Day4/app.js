'use strict';

// alert(null > 0);  // (1) false
// alert(null == 0); // (2) false
// alert(null >= 0); // (3) true

// Mathematically, that’s strange. The last result states that "null is greater than or equal to zero", 
// so in one of the comparisons above it must be true, but they are both false.

// The reason is that an equality check == and comparisons > < >= <= work differently. 
// Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

// On the other hand, the equality check == for undefined and null is defined such that, 
// without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.


// alert(5 > 4); //true
// alert("apple" > "pineapple"); // false
// alert("2" > "12"); // true
// alert(undefined == null);  //true
// alert(undefined === null); // false
// alert(null == "\n0\n"); //false 
// alert(null === +"\n0\n");  // false

// if ("0") {
//     alert( 'Hello' );
//   }


// Task 
// let message = prompt("What is the “official” name of JavaScript?", "");

// if (message == "ECMAScript") {
//     alert("Right!");
// } else {
//     alert("Didn’t know? ECMAScript!");
// }

//Task

// let enterNmuber = prompt("Enter any number", "");

// if (enterNmuber > 0) {
//     alert(1);
// } else if (enterNmuber < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }

// Task convert below logic to ternanry. 

// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

// result = (a+b) < 4 ? 'Below' : 'Over';

// Task convert below logic to ternanry. 

let message;

if (login == 'Employee') {
    message = 'Hello';
} else if (login == 'Director') {
    message = 'Greetings';
} else if (login == '') {
    message = 'No login';
} else {
    message = '';
}

message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' :
            '';