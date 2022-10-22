import React from 'react'

import { MdLibraryAddCheck } from 'react-icons/md'

import Article from '../../styles/Article.style'
import Card from '../../styles/Card.style'
import Container from '../../styles/Container.style'
import Wrapper from '../../styles/Wrapper.style'

import './skills.css'

const Skills = () => {
  return (
    <Wrapper id='skills'>
      <h5>Learn About</h5>
      <h2>My Skills</h2>

      <Container className="skills-container">
        <Card varWidth={true} varPadding={true}>
          <h3>Frontend Development</h3>
          <div className="skills-content">
            <Article flex={true}>
              <MdLibraryAddCheck className='icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </Article>
            <Article flex={true}>
              <MdLibraryAddCheck className='icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </Article>
            <Article flex={true}>
              <MdLibraryAddCheck className='icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </Article>
            <Article flex={true}>
              <MdLibraryAddCheck className='icon'/>
              <div>
                <h4>Styled Components</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </Article>
            <Article flex={true}>
              <MdLibraryAddCheck className='icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </Article>
            <Article flex={true}>
              <MdLibraryAddCheck className='icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </Article>
          </div>
        </Card>
        <Card varWidth={true} varPadding={true}>
          <h3>Backend Development</h3>
          <div className="skills-content">
            <Article flex={true}>
              <MdLibraryAddCheck className='icon'/>
              <div>
                <h4>Ruby</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </Article>
            <Article flex={true}>
              <MdLibraryAddCheck className='icon'/>
              <div>
                <h4>Rails</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </Article>
            <Article flex={true}>
              <MdLibraryAddCheck className='icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </Article>            
          </div>
        </Card>
      </Container>
    </Wrapper>
  )
}

export default Skills