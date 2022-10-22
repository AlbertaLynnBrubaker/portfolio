import React from 'react'

import Article from '../../styles/Article.style'
import Button from '../../styles/Button.style'
import Card from '../../styles/Card.style'
import Container from '../../styles/Container.style'
import Image from '../../styles/Image.style'
import Wrapper from '../../styles/Wrapper.style'
import './portfolio.css'

const Portfolio = () => {
  return (
    <Wrapper id='portfolio'>
      <h5>Take A Look At</h5>
      <h2>My Portfolio</h2>
      <Container className='portfolio-container'>
        <Card varWidth={true}> 
          <Article>
            <div>
              <Image src='' alt='project image' />
            </div>
            <h3>Title</h3>
            <div className='portfolio-buttons'>
              <Button as='a' href='' primary>Github</Button>
              <Button as='a' href='' primary>Live Demo</Button>
            </div>
          </Article>
        </Card> 
        <Card varWidth={true}> 
        <Article>
            <div>
              <Image src='' alt='project image' />
            </div>
            <h3>Title</h3>
            <div className='portfolio-buttons'>
              <Button as='a' href='' primary>Github</Button>
              <Button as='a' href='' primary>Live Demo</Button>
            </div>
          </Article>
        </Card>
        <Card varWidth={true}> 
        <Article>
            <div>
              <Image src='' alt='project image' />
            </div>
            <h3>Title</h3>
            <div className='portfolio-buttons'>
              <Button as='a' href='' primary>Github</Button>
              <Button as='a' href='' primary>Live Demo</Button>
            </div>
          </Article>
        </Card>
      </Container>
    </Wrapper>
  )
}

export default Portfolio