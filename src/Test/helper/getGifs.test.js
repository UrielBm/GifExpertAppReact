import React from 'react';
const { getGifs } = require("../../helpers/getGifts");

describe('Prueba conGetGifts Fetch', () => {
    
    test('Debe de traer 10 argumentos en un objeto ', async() => {
        const gifts = await getGifs('Goku');
        expect(gifts.length).toBe(10);
    });
    test('Debe de regresar un string vacio ', async() => {
        const gifts = await getGifs('');
        console.log(gifts);
        expect(gifts.length).toBe(0);
    })
    
    
})
