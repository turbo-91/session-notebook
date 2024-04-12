/* __________________________________________________

O     B      J        E        C       T     S

data type that requires a key-value (it's like a dictionary)
______________________________________________________________*/

const myObject = {
  name: "Maria",
  age: 20,
  city: "Berlin",
  "Birth City": "Montevideo",
  2: 3,
};

// TWO WAYS TO ACCES

// dot notation .
console.log("dot notation: ", myObject.name);

// []
console.log("[] notation two words :", myObject["Birth City"]);
console.log("[] notation one word :", myObject["Birth City"]);

// create new key - value pair
myObject.chosenKey = true;
console.log("After adding new key", myObject);

// Be careful!
myObject.age = 30;
console.log("after age change", myObject);
// existing keys are changed the same way you add a new one

// Delete a key - value pair
delete myObject["2"];
console.log("after deleting '2' :", myObject);

// Add an Array to my object
const favoriteMovies = ["Holiday", "Harry Poter igitt", "TS"];

myObject.favoriteMovies = favoriteMovies;
console.log("My Object after adding my favorite movies :", myObject);

// Console log one element of myFavorite Movies
console.log("one favorite movie :", myObject.favoriteMovies[1]);

// Add something to my favorite movies
myObject.favoriteMovies.push("LOTR");
console.log("after adding movie to array favoriteMovies: ", myObject);
