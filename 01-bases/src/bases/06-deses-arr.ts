


const character = ['goku', 'vegeta', 'trunks', 'gohan'];

const [ g, v , , s , h = "no existe" ] = character;

console.log({g,v,s , h });

//  SON COMO TUPLAS, nunca cambiaran
const returnArray = () => {
    return ['ABC', 123] as const; // nunca cambiaran
}

const[lethes, numbers] = returnArray();

console.log(lethes.toLowerCase(), numbers*2);

