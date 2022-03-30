import React from 'react'
import './header.css'
import CTA from './CTA'
import mePhoto from '../../assets/mePhoto.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Danijel Marojevic</h1>
        <h5 className='text-light'>Junior frontend developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
        <img className='me__photo' src={mePhoto} alt="me"></img>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header