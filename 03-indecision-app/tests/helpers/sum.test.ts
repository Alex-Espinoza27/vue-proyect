import { expect, test } from 'vitest'
import { sum,addArray } from '../../src/helpers/sum'
import { describe } from 'node:test';
 
describe('add fcuntion: ', () =>{
    test('adds 1 + 2 to equal 3', () => {
        // preparacion
        const a = 1;
        const b = 4; 
        // estimulo
        const result = sum(a, b);
        // comportamiento esperado
        expect(result).toBe(a+b);
    });
});


describe('addArray function test', () => {
    test('should return 0 if the array is empty', () => {
        const arr = [];
        const result = addArray(arr);
        expect(result).toBe(0);
    })
    
    test('should return the proper value of the addArray function', () => {
        const arr = [1,2,3]; 
        const result = addArray(arr);
        expect(result).toBe(6);
    })
 })



// comando para inciar el test con vitest
// npm run test:unit