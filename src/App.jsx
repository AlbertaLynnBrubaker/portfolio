import React from 'react'

import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
import Portfolio from './components/portfolio/Portfolio'
import Skills from './components/skills/Skills'

import GlobalStyles from './GlobalStyles.style'

const App = () => {
  return (
    <>
      <GlobalStyles />      
      <Header />
      <Navigation />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App