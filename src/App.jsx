import React from 'react'

import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
import Portfolio from './components/portfolio/Portfolio'
import Stack from './components/stack/Stack'
import Skills from './components/skills/Skills'

const App = () => {
  return (
    <>      
      <Header />
      <Navigation />
      <About />
      <Skills />
      <Portfolio />
      <Stack />
      <Contact />
      <Footer />
    </>
  )
}

export default App