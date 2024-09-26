import React from 'react'
import AfterSlider from '../assets/components/AfterSlider'
import Discover from '../assets/components/Discover'
import Cards from '../assets/components/Cards'
import OurMenu from '../assets/components/OurMenu'
import UpcomingEvents from '../assets/components/UpcomingEvents'
import Reservation from '../assets/components/Reservation'
import Carousel from '../assets/components/header/Carousel'
import Testimonials from '../assets/components/Testimonials'
import Playvideo from '../assets/components/Playvideo'
import Latestnews from '../assets/components/Latestnews'
import SpecialSignUp from '../assets/components/SpecialSignUp'


function Home() {
  return (
    <div>
        <Carousel/>
        <AfterSlider />
        <Discover />
        <Cards />
        <OurMenu />
        <UpcomingEvents />
        <Reservation />
        <Testimonials/>
        <Playvideo/>
        <Latestnews/>
        <SpecialSignUp/>
        
    </div>
  )
}

export default Home