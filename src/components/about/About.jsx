import React from 'react'
import './about.css'
import me from '../../assets/me-about.jpg'
import meRotate from '../../assets/meRotate.jpg'
import RotatePhoto from '../../assets/RotatePhoto.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know Me</h5>
      <h2>About me</h2>

      <div className='container container__about'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={meRotate} alt='About Image'></img>
          </div>
        </div>

        <div className='about__content'> 
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>No Working Experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Soon to be many</small>
            </article>

            <article className='about__card'>
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>5</small>
            </article>
          </div>

          <p>
          From Mostar
          <br />
          22 years old
          <br />
          Masters student, Computing 
          <br />
          Current title: bacc.ing. computing
          <br />  
          Next step: Get a job
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About