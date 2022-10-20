import React from 'react'

import { GoMortarBoard } from 'react-icons/go'
import { RiStackLine } from 'react-icons/ri'

import aboutImage from '../../assets/AboutPic.jpg'

import Article from '../../styles/Article.style'
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
        <div className='about-image'>
          <Image src={aboutImage} alt='Alie Brubaker'/>
        </div>

        <div className='about-content'>
          <div className="about-cards">
            <Card padding={false}>
              <Article >
                <GoMortarBoard className='icon'/>
                <h4>Flatiron School Graduate</h4>
                <small>Software Engineering Program</small>
              </Article>
            </Card>
            <Card padding={false}>
              <Article >
                <RiStackLine className='icon'/>
                <h4>Fullstack</h4>
                <small>React | Ruby on Rails</small>
              </Article>
            </Card>
            {/* <article className='about-card'>
              <GoMortarBoard className='about-icon'/>
              <h5>Flatiron School Graduate</h5>
              <small>Software Engineering Program</small>
            </article> */}            
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus laborum esse at neque iusto. Corporis ut, beatae harum qui sint assumenda voluptatum, pariatur blanditiis impedit hic, odit laboriosam ipsa.
          </p>
        </div>
      </Container>
    </Wrapper>
  )
}

export default About