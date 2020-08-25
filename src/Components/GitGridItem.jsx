import React from 'react'

export const GitGridItem = ({id,title,url}) => {
    return (
        <div className="wrapper-gift-item">
            {/* {imagenes.title} */}
            < img  className="gift" src={url} alt={title} />
            <p className="titulo-gift animate__animated animate__bounceIn animate__delay-1s ">{title}</p>
        </div>
    )
}
