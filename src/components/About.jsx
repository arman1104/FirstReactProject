import React from "react";
import HeroContent from "./HeroContent";

const About = () => {
  const content = {
    text: "Our organization has a strong focus on quality, customer satisfaction, and quick turnaround time. We maintain ethical practices that are purely driven to deliver businesses with unbeatable ROIs and have an extensive network of resources spanning various industrial niches.",
    imgSrc: "/images/about img.jpg",
  };

  return (
    <div>
      <h2
        className="about-h2"
        style={{ fontSize: "2.5rem", marginBottom: "0" }}
      >
        About Us
      </h2>
      <HeroContent text={content.text} imgSrc={content.imgSrc} />
    </div>
  );
};

export default About;
