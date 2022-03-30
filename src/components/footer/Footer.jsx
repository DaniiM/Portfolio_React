import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/danijel.marojevic3/' target='_blank'><BsFacebook/></a>
        <a href='https://www.instagram.com/danijel.marojevic/' target='_blank'><FaInstagram/></a>
        <a href='https://www.linkedin.com/in/danijel-marojevi%C4%87-glibo-037075180/' target='_blank'><BsLinkedin/></a>
      </div>

      <div className='footer__copyrights'>
        <small>&copy; Danijel Marojevic Glibo. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer