import React from 'react'

import './modal.css'
import { flatironData, workData } from './modal_data'

const Modal = ({showModal, setShowModal}) => {
  let opt

  switch (showModal) {
    case 'flatiron':
      opt = flatironData
      break;
    case 'work':
      opt = workData
      break;
    default:
      return null
  }

  return (
    <div className='modal-wrapper' onClick={() => setShowModal("")}>
      <div className='modal-container'>
        <div className='modal-header'>
          <h2>{opt.title}</h2>
        </div>
        <div className='modal-content'>
          <h4>{opt.content}</h4>
        </div>
      </div>
    </div>
  )
}

export default Modal