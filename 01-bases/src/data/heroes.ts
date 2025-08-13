
export interface Hero {
    id: number;
    name: string;
    owner: Owner;
}

export type Owner = 'DC' | 'Marvel';


const heroes : Hero[] = [
    {
        id: 1,
        name: "Batman",
        owner: "DC",
    },
    {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
    },
    {
        id: 3,
        name: "Superman",
        owner: "DC",
    },
    {
        id: 4,
        name: "Flash",
        owner: "DC",
    },
    {
        id: 5,
        name: "Wolverine",
        owner: "Marvel",
    },

];
// en el otro arhivo estara como: import {owners} from "../data/heroes";
export const owners = ['DC', 'Marvel'] as const;

// porque default ? porque es el unico export que se va a hacer en este archivo
// si se exportan mas cosas, se hace un export normal

// en el otro arhivo estara como: import heroes from "../data/heroes";
export default heroes;
