import React from 'react'
import './ProductGallery.scss'

function ProductGallery({name, gallery = {}}) {
    const {first ={}, second = {}, third = {}} = gallery
    const width = window.innerWidth
    return (
        <div className="product-gallery">
            <div className="small-img">
                <img src={width >= 1200 ? first.desktop : width >= 768 ? first.tablet : first.mobile} alt={name}/>
                <img src={width >= 1200 ? second.desktop : width >= 768 ? second.tablet : second.mobile} alt={name}/>
            </div>
            <div>
                <img src={width >= 1200 ? third.desktop : width >= 768 ? third.tablet : third.mobile} alt={name}/>
            </div>
        </div>
    )
}

export default ProductGallery
