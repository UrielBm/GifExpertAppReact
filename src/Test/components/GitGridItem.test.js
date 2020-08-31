import React from 'react';
import {shallow} from 'enzyme';
import {GitGridItem} from '../../Components/GitGridItem';
describe('Probando el uso correcto del componmente de React GitGridItem.js', () => {
        const title ="Titulo de imagen";
        const url="http://localhost/algo.jpg";
        const wrapper=shallow(<GitGridItem title={title} url={url} />);
    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

test('Debe de tener n párrafo con el titulo', () => {
    const p=wrapper.find('p');
    expect(p.text().trim()).toBe(title);
    
});
test('debe mostrar bien los argumentos de la imagen ', () => {
    const img=wrapper.find('img');
    // console.log(img.props().src);
    expect(img.props().src).toBe(url);
    expect(img.prop('alt')).toBe(title);
});
test('Evaluar que las clases en el div esten agregadas ', () => {
    
    const div=wrapper.find('div');
    // console.log(div.prop('className'));
    expect(div.prop('className')).toBe('wrapper-gift-item');
})



    
})
