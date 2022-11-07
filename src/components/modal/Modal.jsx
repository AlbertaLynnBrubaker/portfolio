import React from 'react'

import './modal.css'
import { flatironData, workData, CVData } from './modal_data'
import AlieCV from '../../assets/AlieCV.png'

const Modal = ({showModal, setShowModal}) => {
  let opt

  switch (showModal) {
    case 'flatiron':
      opt = flatironData
      break
    case 'work':
      opt = workData
      break
    case 'CV':
      opt = CVData
      break
    default:
      return null
  }

  const contentMap = opt.content.map(paragraph => {
    return (
      <>
        <h4>{paragraph}</h4>
        <br/>
      </>
    )
  })

  return (
    <div className='modal-wrapper' onClick={() => setShowModal("")}>
      <div className='modal-container'>
        <div className='modal-header'>
          <h2>{opt.title}</h2>
        </div>
        <div className='modal-content'>
          {showModal !== 'CV' ? contentMap : <img src={AlieCV} alt='Alie CV'/>}
        </div>
      </div>
    </div>
  )
}

export default Modal