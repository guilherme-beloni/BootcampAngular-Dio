//generics

//Eu digo o tipo exato que eu quero. Passando dentro das <>!
function concatArray<T>(...items: T[]): T[] {
    return new Array().concat(...items);
}


const numArray = concatArray<number[]>([1, 5], [3]);
console.log(numArray);
const stringArray = concatArray<string[]>(["Gui", 'Zaca'], ['Beloni']) 
console.log(stringArray);
