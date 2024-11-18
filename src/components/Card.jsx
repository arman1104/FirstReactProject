import React from 'react';
import './Card.css';

const Card = ({ Icon, title, description, isActive, onClick }) => {
  return (
    <div 
      className={`service ${isActive ? 'active-card' : ''}`} 
      onClick={onClick}
    >
      <Icon className='service-icon' />
      <div className='service-text'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
