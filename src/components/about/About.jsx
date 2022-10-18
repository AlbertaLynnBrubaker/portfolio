import React from 'react'

import { GoMortarBoard } from 'react-icons/go'
import { RiStackLine } from 'react-icons/ri'

import aboutImage from '../../assets/AboutPic.jpg'

import './about.css'

const About = () => {
  return (
    <section id="about">
      <h5>A Little Bit</h5>
      <h2>About Me</h2>

      <div className='container about-container'>
        <div className='about-image'>
          <img src={aboutImage} alt='Alie Brubaker'/>
        </div>

        <div className='about-content'>
          <div className="about-cards">
            <article className='about-card'>
              <GoMortarBoard className='about-icon'/>
              <h5>Flatiron School Graduate</h5>
              <small>Software Engineering Program</small>
            </article>
            <article className='about-card'>
              <RiStackLine className='about-icon'/>
              <h5>Fullstack</h5>
              <small>React | Ruby on Rails</small>
            </article>
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
      </div>
    </section>
  )
}

export default About