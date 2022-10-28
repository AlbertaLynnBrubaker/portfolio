import React from 'react'

import Article from '../../styles/Article.style'
import Button from '../../styles/Button.style'
import Card from '../../styles/Card.style'
import Image from '../../styles/Image.style'

const Project = ({project}) => {
  const { title, image, description, github, youtube, demo } = project

  return (
    <Card varWidth={true}> 
      <Article varColor={true}>
        <div className='project-image'>
          <Image src={image} alt='project image' />
        </div>
        <h3>{title}</h3>
        <small>{description}</small>
        <div className='portfolio-buttons'>
          <Button as='a' href={github} primary target='_blank'>Github</Button>
          {/* <Button as='a' href={demo} primary>Github</Button> */}
          <Button as='a' href={youtube} primary target='_blank'>Watch</Button>
        </div>
      </Article>
    </Card>
  )
}

export default Project