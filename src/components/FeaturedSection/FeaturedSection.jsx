import React from 'react';

const FeaturedSection = () => {
  const companyLogos = [
    'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cad44fb711e700c0a1_Group%2018530.webp',
    'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cae70f01d34820d129_Group%2018531.webp',
    'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969c99e10c822b37179e8_Group%2018532.webp',
    'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969caa274fa886bbafd69_Group%2018536.webp',
    'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969ca47165b7b29cd5bfa_Group%2018534.webp',
    'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969ca4e2bcd235bf57982_Group%2018533.webp'
    // Add more logo paths as needed
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-8">
          Trusted by 100,000+ local businesses globally
        </h2>
        <div className="flex justify-center">
          {companyLogos.map((logo, index) => (
            <img
              src={logo}
              alt={`Company Logo ${index}`}
              className="h-20 mx-4"
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
