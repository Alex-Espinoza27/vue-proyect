import heroes, { type Owner } from "../data/heroes"; 


export const getHereosByOwner = (id:number) => {
    return heroes.find((hero) => hero.id === id) ?? {};
}
export const getHereosById = (id:number) => {
    return heroes.find((hero) => hero.id === id);
}

console.log(getHereosByOwner(1)); // [ { id: 1, name: 'Batman', publisher: 'DC' } ]


export const getHeroesByOwner = (name: Owner) => {
    return heroes.filter((hero) => hero.owner === name) ?? {};
}

console.log(getHeroesByOwner('DC')); // [ { id: 1, name: 'Batman', publisher: 'DC' } ]






