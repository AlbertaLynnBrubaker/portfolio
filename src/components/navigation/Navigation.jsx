import React, { useState } from 'react'

import { BiHome } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { BsClipboardCheck } from 'react-icons/bs'
import { VscFolderOpened } from 'react-icons/vsc'
import { HiOutlineMailOpen } from 'react-icons/hi'

import Nav from '../../styles/Nav.style'

const Navigation = () => {
  const [ activeNav, setActiveNav ] = useState('#')

  return (
    <Nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><CgProfile/></a>
      <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><BsClipboardCheck/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><VscFolderOpened/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><HiOutlineMailOpen/></a>
    </Nav>
  )
}

export default Navigation