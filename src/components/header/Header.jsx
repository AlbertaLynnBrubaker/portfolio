import React from 'react'

import HeaderButtons from './HeaderButtons'
import HeaderSocials from './HeaderSocials'
import avatar from '../../assets/HeaderPic.png'
import ABLogoLight from '../../assets/ABLogoLight.png'

import Container from '../../styles/Container.style'
import Image from '../../styles/Image.style'
import Wrapper from '../../styles/Wrapper.style'
import './header.css'

const Header = () => {
  return (
    <Wrapper as='header' id='header'>
      <Container className="header-container">
        <div className='header-logo-container'>          
          <Image src={ABLogoLight} />          
        </div>
        <h1>Alie Brubaker</h1>
        <h5 className='text-light'>Fullstack Software Engineer</h5>
        <HeaderButtons />
        <HeaderSocials />
        {/* <div className='avatar'>
          <Image src={avatar} alt='Alie Brubaker' />
        </div> */}

        {/* <a href='#contact' className='scroll-down'>Scroll to Bottom</a> */}
        
      </Container>
    </Wrapper>
  )
}

export default Header