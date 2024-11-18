
import React from 'react';
import HeroContent from './HeroContent';
// import features from "../assets/features.svg"
const Hero = () => {
  const content = {
    text: 'With a deep understanding of the ever-changing technology landscape, we are well-positioned to provide top-notch technology services to our clients. Our commitment to excellence has made us a name to reckon with in the digital solutions industry.',
    imgSrc: '/images/hero img.jpg'
  };

  return (
  <>
  <HeroContent text={content.text} imgSrc={content.imgSrc} />
  {/* <HeroContent text={content.text} imgSrc={features} /> */}
  
  </>


  );
};

export default Hero;
