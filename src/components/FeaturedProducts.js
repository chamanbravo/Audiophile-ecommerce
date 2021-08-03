import React from 'react'
import './FeaturedProducts.scss'
import { data } from '../context/mockData/data'
import ProductCard from './ProductCard';

function FeaturedProducts() {
    const FeaturedList = data.filter(product => product.featured);
    
    return (
        <div className="featured-container">
            <div>
                <h1>RECOMMENDED</h1>
            </div>
            <div className="featured-products">
                {FeaturedList.map(items => {
                    console.log(items.name)
                    const { id } = items;
                    return(
                        <ProductCard key={id} {...items} link={`/product/${id}`} />
                    )
                })}
            </div>
        </div>
    )
}

export default FeaturedProducts
