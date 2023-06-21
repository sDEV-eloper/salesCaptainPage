import React from 'react'
import HomeDefaultSection from './components/HomeDefaultSection/HomeDefaultSection'
import FeaturedSection from './components/FeaturedSection/FeaturedSection'
import MakingBusiness from './components/MakingBusiness/MakingBusiness'
import Team from './components/Team/Team'
import Footer from './components/Footer/Footer'
import LastSection from './components/LastSection/LastSection'
import HorizontalMarquee from './components/HorizontalMarquee/HorizontalMarquee'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage'


const App = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<HomeDefaultSection />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>

  )
}

export default App