import React from 'react'

import SkillArticle from './SkillArticle'

import { $frontendSkills, $backendSkills } from './skill_data'

import Card from '../../styles/Card.style'
import Container from '../../styles/Container.style'
import Wrapper from '../../styles/Wrapper.style'

import './skills.css'

const Skills = () => {
  const frontendMap = $frontendSkills.map(skill => {
    return(
      <SkillArticle key={ skill.id } skill={ skill } />
    )
  })

  const backendMap = $backendSkills.map(skill => {
    return(
      <SkillArticle key={ skill.id } skill={ skill } />
    )
  })

  return (
    <Wrapper id='skills'>
      <h5>Learn About</h5>
      <h2>My Skills</h2>

      <Container className="skills-container">
        <Card varWidth={true} varPadding={true}>
          <h3>Frontend Development</h3>
          <div className="skills-content">
            {frontendMap}
          </div>
        </Card>
        <Card varWidth={true} varPadding={true}>
          <h3>Backend Development</h3>
          <div className="skills-content">
            {backendMap}          
          </div>
        </Card>
      </Container>
    </Wrapper>
  )
}

export default Skills