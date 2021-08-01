import React from 'react'
import { image_best_gear_mobile, image_best_gear_tablet, image_best_gear_desktop } from '../assets/index'
import './AboutUs.scss';

//{ image_best_gear_mobile, image_best_gear_tablet, image_best_gear_desktop } 

function AboutUs() {
    const width = window.innerWidth;
    return (
        <div className="aboutus-container">
            <div className="aboutus-head">
                <h1>BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h1>
                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
            <img
                src={`${
                    width >= 1024
                    ? image_best_gear_desktop
                    : width >= 768
                    ? image_best_gear_tablet
                    : image_best_gear_mobile
                }`}
                alt='best gear'
            />
        </div>
    )
}

export default AboutUs
