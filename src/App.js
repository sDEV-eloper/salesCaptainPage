import React from 'react'
import HomeDefaultSection from './components/HomeDefaultSection/HomeDefaultSection'
import FeaturedSection from './components/FeaturedSection/FeaturedSection'
import MakingBusiness from './components/MakingBusiness/MakingBusiness'
import Team from './components/Team/Team'
import Footer from './components/Footer/Footer'
import LastSection from './components/LastSection/LastSection'


const App = () => {
  return (
    <div>
   
    <HomeDefaultSection/>
    <FeaturedSection/>
    <MakingBusiness />
    <Team/>
    <LastSection/>
    <Footer/>
    </div>
  )
}

export default App