import React from 'react'

import './footer.css'

import Wrapper from '../../styles/Wrapper.style'

import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <Wrapper as='footer' id='footer'>
      <a href='#' className='footer-logo'>ALIE</a>

      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer-socials'>
        <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'><BsFacebook /></a>
        <a href='https://www.twitter.com/' target='_blank' rel='noreferrer'><BsTwitter /></a>
        <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'><BsLinkedin /></a>
      </div>

      <div className="footer-copyright">
        <small className='text-light'>&copy; Alie Brubaker. All rights reserved.</small>
      </div>
    </Wrapper>
  )


}

export default Footer