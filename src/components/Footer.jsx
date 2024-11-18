import React from 'react'
import './Footer.css'
import { FaSquareInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className='footer-container'>
      <p>Follow us on</p>
      <div className='icon-container'>
      <FaSquareInstagram className='footer-icons'/>
      <RiTwitterXLine className='footer-icons'/>
      <FaFacebook className='footer-icons'/>
      </div>
    </div>
    </>
  )
}

export default Footer
