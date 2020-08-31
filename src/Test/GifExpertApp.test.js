import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('realizando pruebas en el componente <GifExpertApp />', () => {
    test('Muestra de manwera corrrecta el componente <GifExpertApp  ', () => {
        const wrapper=shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });
    test('debe de mostrar una lista de categorias', () => {
        const categorias= ['Goku', 'Pokemon'];
        const wrapper=shallow(<GifExpertApp defaultCategorias={categorias} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categorias.length);
    })
    
    
})
