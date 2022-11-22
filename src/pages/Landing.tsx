// import React, {useState} from 'react'

import GetStarted from "../components/landingSections/GetStarted"
import Hero from "../components/landingSections/LandingHero"
import HowItWorks from "../components/landingSections/HowItWorks"

const Landing = () => {

    return (
        <div id='landing'>
             <Hero/>
             <HowItWorks/>
             <GetStarted/>
        </div>
    )
}

export default Landing