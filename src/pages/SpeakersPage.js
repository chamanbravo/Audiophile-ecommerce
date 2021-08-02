import React from 'react'
import { PagesHero, Categories, Speakers, AboutUs } from '../components'

function SpeakersPage() {
    return (
        <div>
            <PagesHero title='speakers' />
            <Speakers />
            <Categories />
            <AboutUs />
        </div>
    )
}

export default SpeakersPage
