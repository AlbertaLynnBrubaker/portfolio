import React, { useState } from 'react'

import { BiHome } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { BsClipboardCheck } from 'react-icons/bs'
import { RiStackLine } from 'react-icons/ri'
import { HiOutlineMailOpen } from 'react-icons/hi'

import './navigation.css'

const Navigation = () => {
  const [ activeNav, setActiveNav ] = useState('#')

  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><CgProfile/></a>
      <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><BsClipboardCheck/></a>
      <a href='#stack' onClick={() => setActiveNav('#stack')} className={activeNav === '#stack' ? 'active' : ''}><RiStackLine/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><HiOutlineMailOpen/></a>
    </nav>
  )
}

export default Navigation