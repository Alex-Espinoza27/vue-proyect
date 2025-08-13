import type { Hero } from "../data/heroes";
import { getHereosById } from "./07-imp-exp";

// 1.
console.log("INCIO");

// Promesas es una forma de ejecutar un proceso asincrono
new Promise((response,reject ) => {
    // 2. hasta qui si ejecuta sin interrupciones
    console.log("Promesa");

    setTimeout(() => {
        reject("No cumplio mi amigo ");
        response("Si cumplio mi amigo 2");    
    }, 1000);

    // 4. aqui se toma su tiempo
    // resolve("Si cumplio mi amigo 1");

}).then( (mesaje)   => console.log("ejecucion real:",mesaje))
    .catch( (error)   => console.warn({error}))
    .finally( ()      => console.log("Se termino la promesa"));

// 3.
console.log("FIN");


console.log("================= getHeroByIdAsync ===================");
const getHeroByIdAsync = (id :number): Promise<Hero>=>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const hero = getHereosById(id);
            hero ? resolve(hero) : reject(`No se encontro el heroe #${id}`);
            
        }, 1500);
    });
}

getHeroByIdAsync(500).then(result => console.log("Heroe",result.name))
                    // .catch(error => alert(error));
                    .catch(alert);

