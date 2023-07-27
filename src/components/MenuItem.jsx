import React from 'react'
import './MenuItem.css'
export default function MenuItem({img, title, desc, category, price}) {
    return (
        <div className="menu-item">
            <div className="img">
                <img src={img} alt={title} />
            </div>
            <div className="description">
                <h2>{title}</h2>
                <p>{desc}</p>
                <h4 className="category">{category}</h4>
                <h4 className="price">$ {price}</h4>
            </div>
        </div>
    )
}


