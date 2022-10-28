import React from 'react'
import { BsLinkedin, BsGithub, BsMedium, BsYoutube } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
      <a href='https://www.linkedin.com/in/alie-brubaker/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
      <a href='https://medium.com/@findingalberta/' target='_blank' rel="noreferrer"><BsMedium/></a>
      <a href='https://www.youtube.com/channel/UCMoQL0LAFZqmGUD4DpxXcgQ/featured' target='_blank' rel="noreferrer"><BsYoutube/></a>
      <a href='https://github.com/AlbertaLynnBrubaker' target='_blank' rel="noreferrer"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials

