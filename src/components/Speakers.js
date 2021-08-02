import React from 'react'
import './Speakers.scss'
import data from '../context/mockData/speakers'
import SingleProduct from './SingleProduct'

function Speakers() {
    return (
        <div className="earphones-container">
            {data.map(items => {
                return(<SingleProduct key={items.id} {...items}/>)
            })}
        </div>
    )
}

export default Speakers
