import { arrayGreyAnatomy } from "./data.js";
import { objectGreyAnatomy } from "./data.js";

console.log("arrayGreyAnatomy: ", arrayGreyAnatomy);
console.log("objectGreyAnatomy: ", objectGreyAnatomy);

/* ------------------------------------------------------
How to run the script:
- Standing in the folder that contain this file, data.js and package.js we need to:
        - First installing all the packages, so `npm i`
        - To run the script, `node script.js`
- If you prefer to run the file in the browser, then you need to create an HTML page and link the js files.


When learning a new method we should ask ourself:
- Does it return something?
    - if so, what?
- Does is need any parameter?
    - if so, what? (String, number, boolean, callback function).
- What should our array contain? (strings, booleans, objects).

Write down the answer to this question and then try to implement the method.
------------------------------------------------------ */

/* ------------------------------------------------------
                        INCLUDES
------------------------------------------------------

- always returns a boolean --- true or false 
- needs array element as parameter
- array can contain any value */

console.log(
  "'That iconic show's protagonist is kinda annoying though...' 'Oh yeah, that is so " +
    arrayGreyAnatomy.includes("Meredith Grey") +
    "'"
);

console.log(
  "'At the same time I find her more fun than her best friend Chris...' 'WTF?! Are you crazy. That is so " +
    arrayGreyAnatomy.includes("Christina Yang") +
    "'"
);

/* ------------------------------------------------------
                        FIND
------------------------------------------------------ 

- returns the element of the array that matches, so any kind of value that can be stored in an array
- needs a generic variable
- array can contain any value

*/

console.log(
  arrayGreyAnatomy.find((movieCharacter) => movieCharacter.startsWith("M"))
);

/* ------------------------------------------------------
                        FIND INDEX
------------------------------------------------------ 

- returns the index of the first element of the array that satisfies the provided testing function, so A NUMBER

*/

/* ------------------------------------------------------
                        SORT
------------------------------------------------------ */

arrayGreyAnatomy.sort((a, b) => {
  const movieCharacterA = a.toLowerCase();
  const movieCharacterB = b.toLowerCase();
  if (movieCharacterA < movieCharacterB) {
    return -1;
  }
  if (movieCharacterA > movieCharacterB) {
    return 1;
  }
  return 0;
});

console.log(arrayGreyAnatomy);

/* ------------------------------------------------------
                        SLICE
------------------------------------------------------ */

/* ------------------------------------------------------
                        SOME
------------------------------------------------------ */

/* ------------------------------------------------------
                        EVERY
------------------------------------------------------ */

/* ------------------------------------------------------
                        REDUCE
------------------------------------------------------ */
