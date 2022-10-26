import React from 'react'

import { GoMortarBoard } from 'react-icons/go'
import { RiStackLine } from 'react-icons/ri'

import aboutImage from '../../assets/AboutPic.jpg'
import aboutImage2 from '../../assets/AboutPic2.png'

import Article from '../../styles/Article.style'
import Button from '../../styles/Button.style'
import Card from '../../styles/Card.style'
import Container from '../../styles/Container.style'
import Image from '../../styles/Image.style'
import Wrapper from '../../styles/Wrapper.style'
import './about.css'

const About = () => {
  return (
    <Wrapper id="about">
      <h5>A Little Bit</h5>
      <h2>About Me</h2>

      <Container className='about-container'>
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
            <Card varPadding={false} >
              <Article varFontSize={true}>
                <GoMortarBoard className='icon' />
                <h4>Flatiron School Graduate</h4>
                <small>Software Engineering Program</small>
              </Article>
            </Card>
            <Card varPadding={false} >
              <Article varFontSize={true}>
                <RiStackLine className='icon' />
                <h4>Fullstack</h4>
                <small>React | Ruby on Rails</small>
              </Article>
            </Card>          
          </div>

          <p>
          I am a 36 year old transgender woman. I am new to solving problems by writing code, but I have always been a problem solver by nature.
          </p>
          <p>
          I am currently building experience with Ruby on Rails and JavaScript based programming. I have a background in non-tech industries with many years of team leadership and goal-oriented metric achievement in retail consumables and sales. The primary focus of my previous positions was in team-building and training. I am very interested in working as a DEI ambassador or leader alongside my writing code.
          </p>
        </div>
      </Container>
    </Wrapper>
  )
}

export default About