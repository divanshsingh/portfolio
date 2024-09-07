import React from 'react'
import Hero from './components/Hero'
import Marque from './components/Marque'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import LocomotiveScroll from 'locomotive-scroll';
import Contact from './components/Contact'

function App() {

  const locomotiveScroll = new LocomotiveScroll(); 

  return (
    <div>
      <Hero />
      <Marque />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App