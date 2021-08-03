import React from 'react'
import './CategoryCard.scss'
import { Link } from 'react-router-dom'
import { scrollToTop } from '../utils/helpers'

function CategoryCard({img, text, url}) {
    return (
        <div className="card-container">
            <img src={img} alt={text} className="product-img"/>
            <div className="card">
                <h5 className="card-title">{text}</h5>
                <Link to={url} className='shop-btn' onClick={ scrollToTop }>SHOP</Link>
            </div>
        </div>
    )
}

export default CategoryCard
