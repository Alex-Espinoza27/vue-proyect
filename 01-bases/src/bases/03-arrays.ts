
// const numberArray = [1, 2, 3, 4, 5] as const;
const numberArray1 = [1, '2', 3.001, 4, 5];

numberArray1.push(6); // [1, 2, 3, 4, 5, 6]
console.log(numberArray1);

// para evitar que enmute los valos en el bojeto
const array3: (number|string)[] = [...numberArray1]; 
array3.push('13'); // [1, 2, 3, 4, 5, 6]

console.log("array3: ", {array3});

export {}; // para evitar errores de redefinicion de variables
// tambien para sea exportado como un modulo