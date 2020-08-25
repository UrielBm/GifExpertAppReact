import React, { Fragment,useState } from 'react'
import { AddCategorias } from './Components/AddCategorias';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {
   //const categorias =['Perros','Anime','Videojuegos', 'One-punch'];
   const [categorias, setCategorias] = useState(['Perros']);
//    const hadleAddCategorias=()=>{
//         // setCategorias([...categorias,'Pokemon']);
//         setCategorias(categ=>[...categ,'Pokemon']);
//    };

    return (
        <Fragment>
            <div className="wrapper-main">
            <h2 className="Title">**GifExpertApp**</h2>
            <AddCategorias setCategorias={setCategorias} />
            <hr className="Linea"/>
            <ol>
            {
                categorias.map(category=>(
                     <GifGrid key={category} categoria={category} />
                ))
            }
            </ol>
            <footer className="footer">Aplicación creada por: Benítez Medina Uriel</footer>
            </div>
        </Fragment>
    )
}
