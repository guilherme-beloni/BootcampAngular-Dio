"use strict";
//generics
//Eu digo o tipo exato que eu quero. Passando dentro das <>!
function concatArray(...items) {
    return new Array().concat(...items);
}
const numArray = concatArray([1, 5], [3]);
console.log(numArray);
const stringArray = concatArray(["Gui", 'Zaca'], ['Beloni']);
console.log(stringArray);
