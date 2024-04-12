/*A R R A Y S

_____________________________________________________________   */

const myArray = [23, "Strings", true, [1, 2, 3], { name: "maria" }, 20n, null];

console.log("My Array first posistion:", myArray[0]);
console.log("My Object in my Array:", myArray[4]);

// My last element Dynamical
console.log("My last element of my Array: ", myArray[myArray.length - 1]);

// My second last element Dynamical
console.log(
  "My second last element of my Array: ",
  myArray[myArray.length - 2]
);

// My last element Dynamical
console.log(
  "My last element of my Array, shorter way to type: ",
  myArray.at(-1)
);

// For the length of the array we count from 1
console.log("Length of the Array:", myArray.length);

// For the position (called: index) we count from 0
//                0       1        2        3         4
const colors = ["red", "green", "blue", "orane", "purple"];
console.log("Colors:", colors);

// Changing Arrays
// 1. Manually
// How to add a value
colors[colors.length] = "black";

console.log("Colors after adding black:", colors);

// How to change the value in the position indicated, I am not adding
colors[3] = "pink";
console.log("Colors after pink: ", colors);

// 2. Using JS Methods
// push -> add a value at the end of the array
colors.push("yellow");
console.log("Colors after push: ", colors);

colors.push("turquoise", "apricot", "ultramarine");
console.log("Adding several colors after push: ", colors);

// pop -> removes last element of array and returns it
const myLastElement = colors.pop();
console.log("my last Element removed through pop:", myLastElement);
console.log("Colors after pop: ", colors);

colors.pop();
console.log("Colors after 2nd pop: ", colors);

// unshift -> Add value at the beginning of the array
colors.unshift("grey");
console.log("Colors after UNnshift: ", colors);

// shift -> remove value from the first position
colors.shift();
console.log("Colors after shift: ", colors);

//________________________________________SLICE________________________________

/* slice ->  returns a shallow copy of a portion of an array into a new array object 
selected from start to end (end not included) where "start" and "end" represent the index 
of items in that array. The original array will not be modified. */

const myFirstSlice = colors.slice(2);
console.log("my First Slice :", myFirstSlice);
console.log("Colors after SLICE:", colors);

//________________________________________SPLICE________________________________

/* splice -> 
The splice() method of Array instances changes the contents of an array by removing or 
replacing existing elements and/or adding new elements in place.

To create a new array with a segment removed and/or replaced without mutating the original 
array, use toSpliced(). To access part of an array without modifying it, see slice(). */

colors.splice(1, 0, "ROJO");
console.log("Colors after first SPLICE: ", colors);

colors.splice(5, 1, "AZUL");
console.log("Colors after second SPLICE: ", colors);
