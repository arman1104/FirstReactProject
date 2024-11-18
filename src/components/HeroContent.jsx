import React from 'react';
import './HeroContent.css';

const HeroContent = ({ text, imgSrc }) => {
  return (
    <>
    <div className="hero-page-container">
      <div className="hero-para">
        <p>{text}</p>
      </div>
      <div className="hero-section-img">
        <img src={imgSrc} alt="img" />
      </div>
    </div>
    </>
  );
};

export default HeroContent;
