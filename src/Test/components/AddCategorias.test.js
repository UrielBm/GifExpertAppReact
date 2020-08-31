import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { AddCategorias } from '../../Components/AddCategorias';
describe('Evaluando el componente AddCategorias.js', () => {
    const setCategorias=jest.fn();
    let wrapper=shallow(<AddCategorias setCategorias={setCategorias} />)
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper=shallow(<AddCategorias setCategorias={setCategorias} />)
    })
    test('evaluando que se visualize bien el componente ', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('debe cambios en un input ', () => {
        const input=wrapper.find('input');
        const value='hola mundo;'
        input.simulate('change',{target:{ value:value }});
         const parrafoinput=wrapper.find('p').text().trim();
        expect(parrafoinput).toBe(value);
    });
    test('NO DEBE DE POSTEAR INFORMACION DEL SUBMIT ', () => {
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategorias).not.toHaveBeenCalled();
    });
    test('llamado de setCategorias y limpiar la caja de texto', () => {
        const value='hola mundo';
        wrapper.find('input').simulate('change',{target:{value}});
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategorias).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');

    })
    
    
})
