import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/danijel-marojevi%C4%87-glibo-037075180/' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/DaniiM' target="_blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials