/* -----------------------------

MATH

_________________________________*/

const isANumber = "1"; /* Attention! This is 1 as a string not as a number*/

let myNumber = 2;

/* Number + String */
let sumA = myNumber + isANumber;
console.log("sumA", sumA);

/* parseInt converts a string into a number*/
sumA = myNumber + parseInt(isANumber);
console.log("sumA", sumA);

// If we parse some text we have NaN "= not a number"
let numberWritten = "one";
numberWritten = parseInt(numberWritten);
console.log("number written after parseint", numberWritten);

// Number - String
let minus = myNumber - isANumber;
console.log(
  "sumA",
  minus
); /* minus automatically converts into a number the plus does not */

// typeof shows what type the variable is

/*
Numbers
*/

let age = 10;

age = age + 1;
console.log("age = age +1", age);
age++;
console.log("age ++", age);
age += 1;
console.log("age += 1", age);

// stopped coding along
