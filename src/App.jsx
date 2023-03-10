import React from 'react'
import Header from './components/Header/header'
import Nav from './components/Nav/nav'
import About from './components/about/About';
import Experience from './components/Experience/experience'
import Services from './components/services/services'
import Portfolio from './components/Portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/footer'

const App = () => {
  return (
    <>
  <Header/>
  <Nav/>
  <About/>
  <Experience/>
  <Services/>
  <Portfolio/>
  <Testimonials/>
  <Contact/>
  <Footer/>
  
    </>
  )
}

export default App