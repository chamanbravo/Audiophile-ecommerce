import React from 'react'
import { PagesHero,  Categories, Earphones, AboutUs } from '../components'

function EarphonesPage() {
    return (
        <div>
            <PagesHero title='earphones' />
            <Earphones />
            <Categories />
            <AboutUs />
        </div>
    )
}

export default EarphonesPage
