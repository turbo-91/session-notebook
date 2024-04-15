// return keyword

fucntion SubmitEvent(a,b){
    const result = a + b
    return result              // nur dann wird "const val" im Folgendennals ergebnis der funktion behandelt
}

const val = sum (3,5)


/*

Beachten:
* alles NACH einem return statement wird niemals ausgeführt. return beendet die function.
-> außer andere return statements wenn sie mit einander exclusiv sind (zB if else)

*/
// arrow functions (fancier way to write functions)

function run(){
return "running"
}

const run = function () {
 return "running"   
}

// WIRD ZU

const run = () => {        // das Wort function verschwindet zugunsten des =>
    return "running"
}

const run = () => "running"       // man kann sogar das return weglassen



const run = name => name + "is running" // wenn die funktion nur eine Variable hat, kann man sogar die () weglassen
 run("sven") 

 
