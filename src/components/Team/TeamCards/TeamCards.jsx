import React from 'react';

const TeamCards = ({
  name,
  role,
  description,
  image,
  percentage,
  percentageDescription,
  productUsed
}) => {
  return (
    
    <div className="bg-gray-100  rounded-2xl shadow-md p-4 border border-gray-300 w-full text-center mx-4">
      <div className="flex flex-col items-center mb-4">
        <img src={image} alt={name} className="rounded-full w-24 h-24 mx-auto mb-4" />
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-400 text-center text-sm">{role}</p>
      </div>
      <p className="text-gray-800 mt-4 italic">{description}</p>
      <div className="flex items-center mt-4">
        <div className="mr-2 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold">{percentage}</span>
          <span className="text-green-600"> {percentageDescription}</span>
          <div className='flex flex-col rounded mt-6'>
          <h3 className='font-bold'>Products Used</h3>
        <div className="flex space-x-2 flex-wrap justify-center items-center p-2 bg-white rounded-2xl">
          {productUsed.map((product, index) => (
            <span key={index} className="bg-gray-100  px-2 py-1 rounded-full text-xs mt-2">
              {product}
            </span>
          ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  
  );
};

export default TeamCards;
