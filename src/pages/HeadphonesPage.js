import React from 'react'
import { PagesHero, Categories, Headphones, AboutUs } from '../components'

function HeadphonesPage() {
    return (
        <div>
            <PagesHero title='headphones'/>
            <Headphones />
            <Categories />
            <AboutUs />
        </div>
    )
}

export default HeadphonesPage
