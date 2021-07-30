import React from 'react'
import { Hero, Categories, FeaturedProducts,AboutUs } from '../components'

function Homepage() {
    return (
        <div className="container">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <AboutUs />
        </div>
    )
}

export default Homepage
