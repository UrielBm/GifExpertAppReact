import React, {useState } from 'react'
import PropTypes from 'prop-types';
export const AddCategorias = ({setCategorias}) => {
    const [InputValue, setInputValue] = useState('');
    const OnChangeValue= (e) =>{
        setInputValue(e.target.value);
        console.log('Onchange llamado')
    };
    const handleSumit= (e)=>{
        e.preventDefault();
        if(InputValue.trim().length>2){
        setCategorias(categ=>[InputValue,...categ,]);
        setInputValue('')
        };
    };
    return (
        <form className="wrapper-form" onSubmit={handleSumit}>
            <p>{InputValue}</p>
            <label>
                <input type="text"  className="input-categoria" placeholder='"ingresa tu  nueva categoria"' value={InputValue} onChange={OnChangeValue} /> 
            </label>
        </form>
    );
}
AddCategorias.propTypes = {
    setCategorias: PropTypes.func.isRequired
};
