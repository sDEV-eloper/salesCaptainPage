import React from 'react';
import AnimateImages from '../AnimateImages/AnimateImages';
import { images } from './constants';
import Navbar from '../Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import FeaturedSection from '../FeaturedSection/FeaturedSection';
import HorizontalMarquee from '../HorizontalMarquee/HorizontalMarquee';
import MakingBusiness from '../MakingBusiness/MakingBusiness';
import Team from '../Team/Team';
import LastSection from '../LastSection/LastSection';
import Footer from '../Footer/Footer';

const HomeDefaultSection = () => {
  return (
    <>
      <section className="bg-gray-200 relative overflow-hidden">
        <nav className="bg-white fixed top-0 left-0 w-full z-20">
          <Navbar />
        </nav>
        <div className="h-screen flex items-center">
          <div className="container mx-auto flex relative z-10">
            <div className="w-full md:w-1/2">
              <div className="rounded-lg p-8 text-center h-full">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-8">Best way to grow your local business</h1>
                <p className="text-lg md:text-xl mb-6 text-gray-500">
                  Artificial Intelligence powered easy-to-use tools to get more customers & give them a better experience
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center">
                  <input
                    type="email"
                    placeholder="e.g. example@mail.com"
                    className="border border-gray-300 rounded-lg py-2 px-4 w-full md:w-80 h-12 mb-2 md:mb-0 md:mr-2"
                  />
                  <button className="bg-blue-600 text-white rounded-md py-2 px-4 w-full md:w-auto hover:bg-blue-700">
                    Get Demo
                  </button>
                </div>
                <p className="text-xs md:text-sm px-6 md:px-16 text-gray-500 mt-3">
                  Try SalesCaptain demo for 3 days, no credit card required. By entering your email, you agree to receive marketing emails from SalesCaptain.
                </p>
              </div>
            </div>
            <div className="hidden md:block w-1/2 top-0 h-full z-0 m-10">
              <AnimateImages images={images} />
            </div>
          </div>
        </div>
      </section>
      <FeaturedSection />
      <HorizontalMarquee />
      <MakingBusiness />
      <Team />
      <LastSection />
      <Footer />
    </>
  );
};

export default HomeDefaultSection;
