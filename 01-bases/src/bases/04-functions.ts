
// PRIMERA FORMA DE DECLARAR UNA FUNCION
function greetPerson(name: string){
    return `Hello ${name}`;
}

console.log(greetPerson('Luis'));

// SEGUNDA FORMA DE DECLARAR UNA FUNCION
const greetPerson2 = (name:string)=>{
    return `Hello ${name}`;
}

console.log(greetPerson2('Alex'));

// TERCERA FORMA DE DECLARAR UNA FUNCION
const greetPerson3 = (name:string) => `hello ${name}`;
console.log(greetPerson3('Yesly'));


const getUser =() =>{
    return {
        user: 'palo',
        id: 501561
    }
}
const getUser1 =(id:number) => ( {
        user: 'javier',
        id: id
    });

const user = getUser();
const user1 = getUser1(789);
console.log({user,user1});

console.log("SEGUNDA PARTE ====================================");

const heroes = [
    {
        id:1,
        name: 'Batman',
        lastname: 'Superman no es fuerte'
    },
    {
        id:2,
        name: 'Superman'
    }
]

const hero = heroes.find((h)=> h.id ===2);
console.log(hero?.id, hero?.lastname?.toUpperCase());
