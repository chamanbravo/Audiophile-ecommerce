import React from 'react'
import './ProductCard.scss'
import Button from './Button'

function ProductCard({id, name, image}) {
    const width = window.innerWidth;
    const { mobile, tablet, desktop } = image;
    return (
        <div className="Product-Card">
            <img  src={`${
                    width >= 1024
                    ? desktop
                    : width >= 768
                    ? tablet
                    : mobile
                }`} alt={name}></img>
            <h2>{name}</h2>
            <Button link={`/product/${id}`} cName='btn-1' innerText='SEE PRODUCT' />
        </div>
    )
}

export default ProductCard
