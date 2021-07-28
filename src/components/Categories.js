import React from 'react'
import './CategoryCard'
import './Categories.scss'
import CategoryCard from './CategoryCard'
import { categories } from '../utils/constants'

function Categories() {
    return (
        <div className="categories-container">
            {categories.map(category => {
                const {text, img , url} = category
                return(
                    <CategoryCard text={text} img={img} url={url} />
                )
            })}
        </div>
    )
}

export default Categories
