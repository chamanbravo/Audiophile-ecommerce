import React from 'react'
import './FeaturedProducts.scss'
import { data } from '../context/mockData/data'
import ProductCard from './ProductCard';

function FeaturedProducts() {
    const FeaturedList = data.filter(product => product.featured);
    
    return (
        <div className="featured-container">
            {FeaturedList.map(items => {
                console.log(items.name)
                const { id } = items;
                return(
                    <ProductCard key={id} {...items} link='/product/id' />
                )
            })}
        </div>
    )
}

export default FeaturedProducts
