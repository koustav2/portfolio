import { useState } from 'react'
// import viteLogo from '/vite.svg'
// import Logo from './assets/logos/three.jpg'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Work from './Components/Work'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Photo from './Components/Photo'

function App() {

  return (
    <div className="">
      <NavBar/>
      <Photo/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
