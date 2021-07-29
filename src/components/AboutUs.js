import React from 'react'
import image_mobile from '../assets/shared/mobile/image-best-gear.jpg';
import image_tablet from '../assets/shared/tablet/image-best-gear.jpg';
import image_desktop from '../assets/shared/desktop/image-best-gear.jpg';
import './AboutUs.scss';

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
                    width >= 1280
                    ? image_desktop
                    : width >= 768
                    ? image_tablet
                    : image_mobile
                }`}
                alt='best gear'
            />
        </div>
    )
}

export default AboutUs
