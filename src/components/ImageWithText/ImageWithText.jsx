import React from 'react';

const ImageWithText = ({title, text, buttonText, imageUrl, switchSide})=> 
{
  const imageSwap = switchSide ? 'order-last' : '';

  // const imagePosition=switchSide? 'justify-start':'justify-end'

  return (
    <>
      <section className="bg-white dark:bg-gray-800 ">
        <div className="gap-8 items-center py-6 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 ">
          <div className={`w-full h-96 relative ${imageSwap}`}>
            <div
              className={`w-full h-96 relative ${imageSwap}  flex  justify-center`}
            >
              <img src={imageUrl} alt="Img"  className=" h-96 rounded-3xl object-contain"/>
            </div>
          </div>

          <div className="mt-4 md:mt-0 p-20">
            <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-800 dark:text-white">
              {title}
            </h2>
            <h2 className="mb-4 text-2xl tracking-tight  text-gray-400">
              {text}
            </h2>
            <button className='text-white hover:bg-blue-500 font-medium bg-blue-800 px-4 py-2 rounded-lg'>{buttonText}</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageWithText;
