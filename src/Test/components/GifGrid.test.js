import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { GifGrid } from '../../Components/GifGrid';
import { useFectchGifts } from '../../hooks/useFectchGifs';
jest.mock('../../hooks/useFectchGifs');
describe('Evaluando el componente GifGrid.jsx', () => {
    const categoria='Sherk';
    test('Deberia mostrar el componenete de manera correcta <GifGrind />  ', () => {
        useFectchGifts.mockReturnValue({
            data:[],
            loading: true,
        });
        const wrapper= shallow( <GifGrid categoria={categoria} />)
        expect(wrapper).toMatchSnapshot();
    });
    test('debe mostrar items cuando se carga imagenes useFetchGifs ', () => {
       const gift =[{
        id: 'ABC',
        url: 'https://localhost/cualquier/cosa.jpg',
        title:'Cualquier cosa',
       },
       {
        id: '123',
        url: 'https://localhost/cualquier2/cosa2.jpg',
        title:'Cualquier cosa2',
       },]
        useFectchGifts.mockReturnValue({
            data:gift,
            loading: false,
        });
        const wrapper= shallow( <GifGrid categoria={categoria} />)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists() ).toBe(false);
        expect(wrapper.find('GitGridItem').length).toBe(gift.length);
    })
    
    
})
