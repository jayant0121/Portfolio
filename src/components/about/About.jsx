import React from 'react'
import './about.css'
import Me from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id = 'about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me} alt='About Image' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className = 'about__icon'/>
              <h5>Experience</h5>
              <small>3+ years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className = 'about__icon'/>
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className = 'about__icon'/>
              <h5>Projects</h5>
              <small>80+ completed projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores neque vero, modi voluptates iste ducimus quas esse nam tempore inventore soluta possimus consectetur, ipsum quae nostrum accusamus numquam beatae molestiae.
          </p>
          <div><a href="#contact" className='btn btn-primary'>Let's Talk</a></div>
        </div>
      </div>
    </section>
  )
}

export default About