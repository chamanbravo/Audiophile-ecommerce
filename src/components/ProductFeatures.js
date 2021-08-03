import React from 'react'
import './ProductFeatures.scss'

function ProductFeatures({features='', includes}) {
    const text = features.split('\n\n')
    return (
        <div className="features-container">
            <div className="features">
                <h1>FEATURES</h1>
                <p className="text1">{text[0]}</p>
                <p className="text2">{text[1]}</p>
            </div>
            <div className="in-box">
                <h1>IN THE BOX</h1>
                {includes.map((inthebox, index) => {
                    const {quantity, item} = inthebox;
                    return(
                        <div key={index} className="items">
                            <li className='list'>
                                <p className="qty">{quantity}x</p>
                                <p>{item}</p>
                            </li>
                        </div>                    
                    )
                })}
            </div>
        </div>
    )
}

export default ProductFeatures
