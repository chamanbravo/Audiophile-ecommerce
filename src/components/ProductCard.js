import React from 'react'
import './ProductCard.scss'
import Button from './Button'

function ProductCard({name, link, image}) {
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
            <h3>{name}</h3>
            <Button link={link} cName='btn-1' innerText='SEE PRODUCT' />
        </div>
    )
}

export default ProductCard
