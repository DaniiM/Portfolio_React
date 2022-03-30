import React from 'react'
import './portfolio.css'
import sparkWEB from '../../assets/sparkWEB.png'
import calculatorJS from '../../assets/calculatorJS.png'
import clockJS from '../../assets/clockJS.png'
import TicTacToeJS from '../../assets/TicTacToeJS.png'

const data = [
  {
    id: 1,
    image: sparkWEB,
    title: 'My first ever coded web',
    github: 'https://github.com/DaniiM/SPARK_web'
  },
  {
    id: 2,
    image: calculatorJS,
    title: 'Simple JavaScript calculator',
    github: 'https://github.com/DaniiM/JS_calculator'
  },
  {
    id: 3,
    image: clockJS,
    title: 'Analog clock, JavaScript',
    github: 'https://github.com/DaniiM/JS_clock'
  },
  {
    id: 1,
    image: TicTacToeJS,
    title: 'Simple game of tic tac toe, JavaScript again',
    github: 'https://github.com/DaniiM/JS_TicTacToe'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container container__portfolio'>
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>GitHub</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio