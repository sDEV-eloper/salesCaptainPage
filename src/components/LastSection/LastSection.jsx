import React from 'react';

const LastSection = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto text-center flex justify-center flex-col">
        <h2 className="text-5xl font-bold mb-4">Ready to grow?</h2>
        <p className="text-gray-600 mb-6 text-center text-xl w-3/4 mx-auto">
          See why 100,000+ businesses trust us. Book a personalized demo to see
how SalesCaptain provides you the right tools to grow your business.
        </p>
        <div className="flex justify-center items-center mb-6">
          <input
            className="border border-gray-300 rounded-lg py-2 px-16 focus:outline-none"
            type="text"
            placeholder="Enter your email"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4 ml-2">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default LastSection;
