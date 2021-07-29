import React from 'react'
import { Hero, Categories, AboutUs } from '../components'

function Homepage() {
    return (
        <div className="container">
        <Hero />
        <Categories />
        <AboutUs />
        </div>
    )
}

export default Homepage
