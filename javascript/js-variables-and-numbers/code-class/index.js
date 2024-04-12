console.log("I am here");
console.log("fuck this fucking fuck");

// Old way to declar a variable

var oldWay = 3;

/* 
after 2015 lol
*/

let newWay = 5;
const iAmConst = 8;

console.log("old way", oldWay);
/* always add some text in "" explaining what you are running 
before inserting the variable you want to run*/

newWay = 10;
console.log("after re assigning newWay", newWay);

// TYPES OF DATA
// Strings. (simple lines of text)

let text = "I am a text";
console.log("I am a string:", text);
text = "I am 10 years old";

// Booleans.
let myBoolean = true;

console.log("my Boolean:", myBoolean);

myBoolean = false;
console.log("change my Boolean:", myBoolean);

// Numbers

letNumber = 20;

// Big Int (won't probably be relevant for us)
let myBigInt = 10n; /* n after number!!!!*/
console.log("myBigInt", myBigInt);

// I can reassign my variables to whatever data type I want
myBigInt = "I am a string";
Number = 900n;

// null. (not very common, Gimena can't think of an exemple, it's intentional while undefined can be a mistake, it comes from the code not from you)

let myNull = null;
console.log("myNull", myNull);

// undefined.
let myUndefined;
console.log("myUndefined:", myUndefined);

// Array. (deutsch: Aufstellung, Reihe, Reihung)

const myArray = [true, "String", 10];
console.log(myArray);

// Objects. (kind of a dictionary where we have a key and a value)
const myObject = {
  cohortName: "Caraway",
  amountStudents: 14,
  mySubObject: {
    name: "Gimena",
    surname: "Maria",
  },
};

console.log("myObect:", myObject);

// Function.
function myFunction() {
  // Here you write your code.
  console.log("I am the function");
}
