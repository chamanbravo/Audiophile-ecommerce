import React from 'react'
import './Hero.scss'
import Button from './Button'

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-text">
                <p className="head-text">NEW PRODUCT</p>
                <h1>XX99 MARK II HEADPHONE</h1>
                <p className="desc-text">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <Button link='/headphones' innerText='SEE PRODUCT' cName='btn-1'/>
            </div>
        </div>
    )
}

export default Hero
