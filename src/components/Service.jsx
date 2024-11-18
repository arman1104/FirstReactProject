import React, { useState } from 'react';
import { RiCodeSSlashLine, RiAdvertisementFill } from "react-icons/ri";
import { ImMobile } from "react-icons/im";
import { FaWordpress } from "react-icons/fa";
import { MdDevicesOther } from "react-icons/md";
import { CiLaptop } from "react-icons/ci";
import Card from './Card'; 

const Service = () => {
  const services = [
    { Icon: RiCodeSSlashLine, title: 'Web Development', description: 'Building responsive websites with efficient coding and high-quality interactions' },
    { Icon: ImMobile, title: 'App Development', description: 'Creating mobile apps with seamless functionality and user-centric experiences.' },
    { Icon: CiLaptop, title: 'Web Design', description: 'Designing visually appealing, user-friendly layouts for enhanced web experiences.' },
    { Icon: MdDevicesOther, title: 'Responsive Design', description: 'Ensuring optimal display and functionality across various device screen sizes.' },
    { Icon: RiAdvertisementFill, title: 'Advertising', description: 'Promoting services effectively to increase brand awareness and conversions.' },
    { Icon: FaWordpress, title: 'WordPress', description: 'Developing customizable WordPress sites for blogs, businesses, and e-commerce.' }
  ];

  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveCardIndex(index === activeCardIndex ? null : index);   
  };

  return (
    <div>
      <h2 className='service-heading'>Our Services</h2>
      <div className='service-page-container'>
        {services.map((service, index) => (
          <Card 
            key={index}
            Icon={service.Icon}
            title={service.title}
            description={service.description}
            isActive={activeCardIndex === index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
