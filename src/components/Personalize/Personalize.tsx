import React from 'react'
import PeronalizeIntro from './components/Intro/PeronalizeIntro'
import Form from './components/Form/FormPersonalize'
import { Link } from 'react-router-dom'


const Personalize = () => {
  return (
    <section className='personalize'>
      <div className='container-personalize'>
        <Link className='button-start-now' to='/creation'>Voltar</Link>
        <PeronalizeIntro />
        <Form/>
      </div>
    </section>
  )
}

export default Personalize