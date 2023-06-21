import React from 'react';
import { companyLogos } from './constants';
import HorizontalMarquee from '../HorizontalMarquee/HorizontalMarquee';


const FeaturedSection = () => {
 

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-8">
          Trusted by 100,000+ local businesses globally
        </h2>
        <div className="flex justify-center">
         <HorizontalMarquee row={companyLogos}/>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
