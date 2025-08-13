
export const persona = {
    nombre: "alex",
    apellido: "espinoza",
    edad: 50,
    addres:{
        city: "Lima",
        zip: 123456,
        lat: 14.123456,
        lng: 12.123456
    }
};// as const; -> esto indica que solamente es de lectura y no permite modificar los valores

console.log("objetos -------------------");
 
const person2 = {...persona,addres: {...persona.addres }};  //clonar el objeto pero no estan sincronizados  
person2.nombre = "Pedro";       
person2.addres.city = "Ayacucho";       
console.log({persona,person2});

const person6 = persona;  // estan sincronizados por completo
person6.nombre = "Maria";  // esto tambien afecta a todos lo que comparten el obtjeto "persona"

console.log("objetos -------------------");
//console.log({persona,person2, person6});
console.log({person6});


// PRPIEDAD DE JAVASCRIPT
// ===================== structureClone() =====================
const personaNueva = structuredClone(persona);
console.log("persona nueva: ", {persona});
personaNueva.apellido = "Perez";
personaNueva.addres.city = "Cusco"; 
console.log("persona nueva: ", {personaNueva});




