import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_16hrmgq', 'template_g9usfz9', form.current, 'UzKGa6ivu3SKLvLw1')

    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className='container container__contact'>
        <div className='contact__options'>
          <article className='contact__option'>
          <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>danijelmarojevicglibo99@gmail.com</h5>
            <a href='mailto:danijelmarojevicglibo99@gmail.com' target='_blank'>Send an email</a>
          </article>
          <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>danijelmarojevicglibo99@gmail.com</h5>
            <a href='https://m.me/danijel.marojevic3/' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>My number</h5>
            <a href='https://api.whatsapp.com/send?phone=+38763182199' target='_blank'>Send a message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTION */}

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message'  rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact