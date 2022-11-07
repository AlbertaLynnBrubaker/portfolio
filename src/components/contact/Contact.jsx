import React, { useRef } from 'react'

import emailjs from 'emailjs-com';
import { $serviceID, $templateID, $publicKey } from '../../key';

import Article from '../../styles/Article.style'
import Button from '../../styles/Button.style'
import Card from '../../styles/Card.style'
import Container from '../../styles/Container.style'
import Form from '../../styles/Form.style'
import Image from '../../styles/Image.style'
import Input from '../../styles/Input.style'
import Wrapper from '../../styles/Wrapper.style'
import './contact.css'

import { HiOutlineMailOpen } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'
import whatsApp from '../../assets/WhatsApp.png'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm($serviceID, $templateID, form.current, $publicKey)
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      });

    e.target.reset()
  }
  
  return (
    <Wrapper id='contact'>
      <h5>Reach Out</h5>
      <h2>Contact Me</h2>
      <Container className='contact-container'>
        <div className="contact-options">
          <Card>
            <Article varFontSize={true}>
              <HiOutlineMailOpen className='icon'/>
              <h4>Email</h4>
              <h5>findingalberta@gmail.com</h5>
              <a href='mailto:findingalberta@gmail.com' target='_blank' rel='noreferrer'>Send a message</a>
            </Article>
          </Card>
          <Card>
            <Article varFontSize={true}>
              <RiMessengerLine className='icon'/>
              <h4>Messenger</h4>
              <h5>Alie Brubaker</h5>
              <a href='https://m.me/alie.brubaker' target='_blank' rel='noreferrer'>Send a message</a>
            </Article>
          </Card>
          <Card>
            <Article className='whats-app'>
              <div className='whats-app-image'>
                <Image src={whatsApp} alt='WhatsApp QR Code' />
              </div>
              <h4>WhatsApp</h4>
              <a href='https://wa.me/17632691213' target='_blank' rel='noreferrer'>Send a message</a>
            </Article>
          </Card>
        </div>        
        <Form ref={form} onSubmit={sendEmail}>
          <Input type='text' name='name' placeholder='Your Full Name' required/>
          <Input type='email' name='email' placeholder='Your Email' required/>
          <Input type='text' name='subject' placeholder='Subject' required/>
          <Input as ='textarea' varHeight={true} name='message' placeholder='Your Message' required/>
          <Button type='submit' primary={true}>Send Message</Button>
        </Form>        
      </Container>
    </Wrapper>
  )
}

export default Contact