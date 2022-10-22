import React from 'react'

import Article from '../../styles/Article.style'
import Button from '../../styles/Button.style'
import Card from '../../styles/Card.style'
import Container from '../../styles/Container.style'
import Form from '../../styles/Form.style'
import Input from '../../styles/Input.style'
import Wrapper from '../../styles/Wrapper.style'
import './contact.css'

import { HiOutlineMailOpen } from 'react-icons/hi'

const Contact = () => {
  return (
    <Wrapper id='contact'>
      <h5>Reach Out</h5>
      <h2>Contact Me</h2>
      <Container className='contact-container'>
        <div className="contact-options">
          <Card>
            <Article>
              <HiOutlineMailOpen />
              <h4>Email</h4>
              <h5>findingalberta@gmail.com</h5>
              <a href='mailto:findingalberta@gmail.com'>Send a message</a>
            </Article>
          </Card>
          <Card>
            <Article>
              <HiOutlineMailOpen />
              <h4>Email</h4>
              <h5>findingalberta@gmail.com</h5>
              <a href='mailto:findingalberta@gmail.com'>Send a message</a>
            </Article>
          </Card>
          <Card>
            <Article>
              <HiOutlineMailOpen />
              <h4>Email</h4>
              <h5>findingalberta@gmail.com</h5>
              <a href='mailto:findingalberta@gmail.com'>Send a message</a>
            </Article>
          </Card>
        </div>        
        <Form>
          <Input type='text' name='name' placeholder='Your Full Name' required/>
          <Input type='email' name='email' placeholder='Your Email' required/>
          <Input as ='textarea' varHeight={true} name='message' placeholder='Your Message' required/>
          <Button type='submit' primary={true}>Send Message</Button>
        </Form>        
      </Container>
    </Wrapper>
  )
}

export default Contact