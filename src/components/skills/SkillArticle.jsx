import React from 'react'

import { MdLibraryAddCheck } from 'react-icons/md'

import Article from '../../styles/Article.style'

const SkillArticle = ({skill}) => {
  const { skillName, skillLevel } = skill
  return (
    <Article flex={true}>
      <MdLibraryAddCheck className='icon'/>
      <div>
        <h4>{skillName}</h4>
        <small>{skillLevel}</small>
      </div>
    </Article>
  )
}

export default SkillArticle