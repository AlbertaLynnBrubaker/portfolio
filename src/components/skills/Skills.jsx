import React from 'react'

import { MdLibraryAddCheck } from 'react-icons/md'

import './skills.css'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>Learn About</h5>
      <h2>My Skills</h2>

      <div className="container skills-container">
        <div className="skills-frontend">
          <h3>Frontend Development</h3>
          <div className="skills-content">
            <article className='skills-details'>
              <MdLibraryAddCheck className='skills-details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills-details'>
              <MdLibraryAddCheck className='skills-details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills-details'>
              <MdLibraryAddCheck className='skills-details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='skills-details'>
              <MdLibraryAddCheck className='skills-details-icon'/>
              <div>
                <h4>Styled Components</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='skills-details'>
              <MdLibraryAddCheck className='skills-details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='skills-details'>
              <MdLibraryAddCheck className='skills-details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="skills-backend">
          <h3>Backend Development</h3>
          <div className="skills-content">
            <article className='skills-details'>
              <MdLibraryAddCheck className='skills-details-icon'/>
              <div>
                <h4>Ruby</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills-details'>
              <MdLibraryAddCheck className='skills-details-icon'/>
              <div>
                <h4>Rails</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills-details'>
              <MdLibraryAddCheck className='skills-details-icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills