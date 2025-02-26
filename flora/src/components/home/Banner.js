import React, { useState, useEffect } from 'react';
import './Banner.css'; 

const Banner = () => {
  const images = [
    '/banner1.webp',
    '/banner2.webp',
    '/banner3.webp',
  ];


  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); 


    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      <img src={images[currentImageIndex]} alt="Banner" className="banner-image" />
    </div>
  );
};

export default Banner;
