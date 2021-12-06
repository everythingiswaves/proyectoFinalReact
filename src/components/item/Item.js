import React from 'react'

import { NavLink } from 'react-router-dom'

const Item = ({ id, name, price, pictureUrl, stock }) => {
    return (
        <div className="productos-item">
            <img src={pictureUrl} alt={name} />
            <h3>{name}</h3>
            <p>Precio:$UY{price}</p>
            <p><NavLink to={`/item/${id}`}>Detalles</NavLink></p>
        </div>
    )
}

export default Item
