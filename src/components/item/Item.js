import React from 'react'

import { NavLink } from 'react-router-dom'

const Item = ({ id, title, price, pictureUrl, stock }) => {
    return (
        <div className="productos-item">
            <img src={pictureUrl} alt={title} />
            <h3>{title}</h3>
            <p>Precio:$UY{price}</p>
            <p><NavLink to={`/item/${id}`}>Detalles</NavLink></p>
        </div>
    )
}

export default Item
