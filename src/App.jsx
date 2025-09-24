import React from 'react'
import NewspaperNavbar from './components/navbar'
import About from './components/About'
import TechStack from './components/Tech'
import Hobbies from './components/hobbies'
// import { Connect } from 'vite'
import Contact from './components/connect'

function App() {
  return (
  <>
      <NewspaperNavbar/>
      <About/>
      <TechStack/>
      <Hobbies/>
      <Contact/>
      {/* <Routes>
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/about" element={<About />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
  </>)
}

export default App
