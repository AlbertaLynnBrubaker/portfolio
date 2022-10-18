import React from 'react'

import HeaderButtons from './HeaderButtons'
import HeaderSocials from './HeaderSocials'
import avatar from '../../assets/HeaderPic.png'

import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h1>Alie Brubaker</h1>
        <h5 className='text-light'>Fullstack Software Engineer</h5>
        <HeaderButtons />
        <HeaderSocials />
        <div className='avatar'>
          <img src={avatar} alt='Alie Brubaker' />
        </div>

        <a href='#contact' className='scroll-down'>Scroll to Bottom</a>
        
      </div>
    </header>
  )
}

export default Header