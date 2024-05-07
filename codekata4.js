/* for */
/* let enumeration = [];

for (let i = 0; i < 10; i++) {

    enumeration[i] = i + 1;

}

console.log(enumeration); */

/* do while */
/* let limit = 3;

do {
    limit--;
} while(limit > 0);

console.log("He acabado el bucle"); */

/* for in */
/* let fruits = {a: "orange", b: "lemon", c: "grape"};

for (let elem in fruits) {
    console.log(fruits[elem]);
} */

/* for of */
/* let fruits = ["orange", "lemon", "grape"];

for (let elem of fruits) {
    console.log(elem);
} */

/* for */
 /*let fruits = ["orange", "lemon", "grape"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
} */

/* Recorrer elementos de un Set */
/* let fruits = new Set (["orange", "lemon", "grape"]);

for (let elem of fruits) {
    console.log(elem);
} */


let fruits = ["orange", "lemon", "grape"];
let myOptions = new Set (["watermelon", "banana"]);

for (let elem of fruits) {
    if (myOptions.has(elem)) {
        console.log(elem);
        break;
    } else {
        console.log(elem);
        continue;
    }
}