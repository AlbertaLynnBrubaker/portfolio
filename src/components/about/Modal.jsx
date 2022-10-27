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
          {contentMap}
        </div>
      </div>
    </div>
  )
}

export default Modal