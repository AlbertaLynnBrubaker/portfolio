import React from 'react'

import Button from '../../styles/Button.style'
import CV from '../../assets/AlieCV.pdf'

const HeaderButtons = ({ showModal, setShowModal }) => {
  
  return (
    <div className='header-button'>
      <Button as='a' onClick={() => setShowModal('CV')} primary={true}>View CV</Button>
      <Button as='a' href={CV} download >Download CV</Button>
      <Button as='a' href='#contact' primary={true}>Contact Me</Button>
    </div>
  )
}

export default HeaderButtons