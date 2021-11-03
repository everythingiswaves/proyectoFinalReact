import React from 'react'

const Item = ({ id, title, price, pictureUrl }) => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={pictureUrl} alt={title} />
            <p>Precio:{price}</p>
        </div>
    )
}

export default Item
