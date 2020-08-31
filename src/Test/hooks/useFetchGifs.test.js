import { renderHook } from'@testing-library/react-hooks';
import '@testing-library/jest-dom'
import {useFectchGifts} from '../../hooks/useFectchGifs'
describe('Realizando pruebas en el hook useFetchGifs.js', () => {
    test('debe retonar el estado inicial ', async() => {
         const {result,waitForNextUpdate}=renderHook(()=>useFectchGifts('Perros'));
         const {data, loading }=result.current;
         await waitForNextUpdate();
         //  console.log(data, loading);
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
    test('debe de retornar un arreglo de imagenes y loading en false ', async() => {
        const {result,waitForNextUpdate}=renderHook(()=>useFectchGifts('Perros'));
        await waitForNextUpdate();
        const {data, loading }=result.current;
        //  console.log(data, loading);
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
    
    
})
