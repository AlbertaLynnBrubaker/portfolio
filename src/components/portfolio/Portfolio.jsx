import React from 'react'

import Project from './Project'

import { projects } from './projects_data'

import Container from '../../styles/Container.style'
import Wrapper from '../../styles/Wrapper.style'
import './portfolio.css'

const Portfolio = () => {

  const projectMap = projects.map( project => {
    return (
      <Project key={project.id} project={project} />
    )
  })

  return (
    <Wrapper id='portfolio'>
      <h5>Take A Look At</h5>
      <h2>My Portfolio</h2>
      <Container className='portfolio-container'>
        {projectMap}
      </Container>
    </Wrapper>
  )
}

export default Portfolio