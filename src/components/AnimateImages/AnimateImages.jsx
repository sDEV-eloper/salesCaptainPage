import React, { useEffect, useState } from 'react';
const AnimatedImages = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div className="relative h-64">
      {images.map((image, index) => (
        <img src={image} alt="img" 
        key={index}
        className={` absolute rounded-3xl  top-0 left-0 h-[480px] transition-opacity duration-1000 ease-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        />

      ))}
    </div>
  );
};

export default AnimatedImages;
