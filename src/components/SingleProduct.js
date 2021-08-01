import React from 'react'
import './SingleProduct.scss'
import Button from './Button'

function SingleProduct({id, new_label, name, text, img}) {
    const {mobile, tablet, desktop} = img
    const width = window.innerWidth
    return (
        <div className={`${width >= 768 && id % 2 === 0 ? 'reverse' : '' } single-product `}>
            <div>
                <img src={width >= 1024 ? desktop : width >=768 ? tablet : mobile} alt={name} className="image"/>
            </div>
            <div className="product-text">
                {new_label ? <p className="label">NEW PRODUCT</p> : ''}
                <h1>{name}</h1>
                <p>{text}</p>
                <Button cName='btn-1' link={`/product/${id}`} innerText='SEE PRODUCT' />
            </div>
        </div>
    )
}

export default SingleProduct
