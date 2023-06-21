import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4  font-extralight">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-xs">
          © SalesCaptain Inc 2023(A division of SalesBook Technologies Pvt Ltd)
        </p>
        <p className='flex text-sm text-gray-300 font-extralight'>
            <ul>
                <li className='mx-4'>
                    <a href="/termandcondition">Term and Conditions</a>
                </li>
                <li className='mx-4'>
                    <a href="/privacy">Privacy</a>
                </li>
                <li className='mx-4'>
                    <a href="/refund">Refund</a>
                </li>
                <li className='mx-4'>
                    <a href="/ccpa">CCPA</a>
                </li>
            </ul>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
