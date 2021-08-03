import React from 'react'
import './SuggestedProduct.scss'
import ProductCard  from './ProductCard'

function SuggestedProduct({others = {}}) {
    return (
        <div className="suggested-container">
            <h1>YOU MAY ALSO LIKE</h1>
            <div className="suggestions">
                {others.map((items, index) => {
                    return(<ProductCard key={index} {...items}/>)
                })}
            </div>
        </div>
    )
}

export default SuggestedProduct
