interface Heroe {
    name:string,
    age: number,
    key: string,
    power ? : string
};

export const person:Heroe = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
    // power: 'Inteligencia'
}
// const {age, name, power = 'No tiene poder' } = person; // Desestructuración de objetos -> areglo or objeto

// console.log({person});
// console.log({age, name, power});

interface CreateHero {
    name:string,
    age: number,
    key: string,
    power ? : string
};

const createHero = ({name, age,power}: CreateHero)=> ({
    id: 544,
    name: name,
    age: age,
    power: power ?? 'No tiene poder' // Si no existe el valor de power, se asigna el valor 'No tiene poder'
})
console.log("====================================");

console.log(createHero(person));
