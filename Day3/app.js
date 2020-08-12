'use strict';

// alert("I am going to test my age in Alert");
// let message = prompt("What your age?", "30"); // 30 here is default value, It is not mandate to provide. We are leave it also. 
// let confirmation = confirm(`You have chosen your age as ${message} Could you please confirm?`);
// alert("Whoowhoo Your age is" + message);
// alert(confirmation); // When you select OK in the confirm it will be true, otherwise false. 


// String(value);

// let value = true;
// alert(typeof value); // boolean
// alert(value); // true but of boolean type

// value = String(value); // now value is a string "true"
// alert(typeof value); // string
// alert(value); // true but of string type


// Number(str);

// let str = "123";
// alert(typeof str); // string

// let num = Number(str); // becomes a number 123
// alert(typeof num); // number 

// let num;
// let valueofNum = Number(num);
// alert(valueofNum); // When number is undefined then value will become NaN , When num is null value becomes 0 , true -1 , flase - 0, String based on value
// alert(typeof valueofNum);  // Still it is of Number data Type Only.

// Boolean(value);

// alert(Boolean("0"));
// alert(Boolean(0));
// alert(4 + 5 + "Rupees"); // 9Rupees
// alert("Dollors" + 4 + 5); // BODMAS then left to right hence the value becomes Dollors45 not Dollors9  

// alert(`the result is $${4 + 4 + 2}`);  // In the template Literals when there are multiple $ signs Javascript Engine will consider only one remainings as string

// let apples = "100";
// alert(+apples);
// alert(typeof apples);
// let app = Number(apples);
// alert(typeof app);


// Task

alert("" + 1 + 0); // 10
alert("" - 1 + 0); // -1
alert(true + false); // 1
alert(6 / "3"); // 2
alert("2" * "3"); // 6
alert(4 + 5 + "px"); // 9px
alert("$" + 4 + 5); //$45
alert("4" - 2); //2
alert("4px" - 2); // NaN
alert(7 / 0); // Infinity
alert("  -9  " + 5); // -4 String Concat hence -9 5
alert("  -9  " - 5); // -14
alert(null + 1); // 1
alert(undefined + 1); // NaN
alert(" \t \n" - 2); // -2 