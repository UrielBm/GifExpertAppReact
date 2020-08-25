import React, {Fragment}from 'react'
import { useFectchGifts } from '../hooks/useFectchGifs'
 import { GitGridItem } from './GitGridItem';
export const GifGrid = ({categoria}) => {
     const {loading,data:imagenes}=useFectchGifts(categoria);
    // console.log(data);

    return (
        <Fragment>
            <h3 className="titulo-Categoria">{categoria}</h3>
            {loading&& <p className="animate__animated animate__flash">Cargando...</p>}
            <div className="wrapper-card-gift-item animate__animated animate__bounceInDown">
                {
                    imagenes.map((imagenes)=>(
                        <GitGridItem key={imagenes.id} {...imagenes} />
                    ))
                }
                
            </div>
        </Fragment>
    )
}
