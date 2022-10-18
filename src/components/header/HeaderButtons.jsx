import React from 'react'

import CV from '../../assets/AlieCV.pdf'

const Buttons = () => {
  return (
    <div className='header-button'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default Buttons