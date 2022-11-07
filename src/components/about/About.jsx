import React, { useState } from 'react'

import Modal from '../modal/Modal'

import { GoMortarBoard } from 'react-icons/go'
import { GiSkills } from 'react-icons/gi'

import aboutImage from '../../assets/AboutPic.jpg'
import aboutImage2 from '../../assets/AboutPic2.png'

import Article from '../../styles/Article.style'
import Card from '../../styles/Card.style'
import Container from '../../styles/Container.style'
import Image from '../../styles/Image.style'
import Wrapper from '../../styles/Wrapper.style'
import './about.css'

const About = () => {
  const [showModal, setShowModal] = useState("")

  return (
    <Wrapper id="about">
      <h5>A Little Bit</h5>
      <h2>About Me</h2>

      <Container className='about-container'>
        <Modal showModal={showModal} setShowModal={setShowModal}/>
        <div className='about-images'>
          <div className='about-image1'>
            <Image src={aboutImage} alt='Alie Brubaker'/>
          </div>
          <div className='about-image2'>
            <Image src={aboutImage2} alt='Alie Brubaker'/>
          </div>
        </div>  
        <div className='about-content'>
          <div className="about-cards">
            <Card className='about-card' varPadding={false} onClick={() => setShowModal('flatiron')}>
              <Article varFontSize={true}>
                <GoMortarBoard className='icon' />
                <h4 className='text-dark'>Flatiron School Graduate</h4>
                <small>Software Engineering Program</small>
              </Article>
            </Card>
            <Card className='about-card' varPadding={false} onClick={() => setShowModal('work')}>
              <Article varFontSize={true}>
                <GiSkills className='icon' />
                <h4 className='text-dark'>Experienced Leader</h4>
                <small>Sales and Service</small>
              </Article>
            </Card>          
          </div>
          
          <p>
          I am a 36 year old transgender woman. I am new to solving problems by writing code, but I have always been a problem solver by nature.
          </p>
          <p>
          I am currently building experience with Ruby and JavaScript based programming. I have a background in non-tech industries with many years of team leadership and goal-oriented metric achievement in retail consumables and sales. The primary focus of my previous positions was in team-building and training. I am very interested in working as a DEI ambassador or leader alongside my writing code.
          </p>
        </div>
      </Container>
    </Wrapper>
  )
}

export default About