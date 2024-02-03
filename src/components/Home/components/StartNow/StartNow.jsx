import React from 'react'
import { IconPointer } from '../icons'
import { Link } from 'react-router-dom';


const StartNow = () => {
  return (
    <section className='start-now' aria-label='Comece agora!'>
      <div className='container'>
        <div className='container-texts'>
          <p className='text-start-now'>
            Nesta página, é possível elaborar um <span className='highlight-text-color'>currículo</span> básico que se converte, ao final, em um código pronto para ser utilizado em qualquer lugar.</p>

          <p className='text-start-now'>
            E não se preocupe, estou disponibilizando um guia passo a passo para fazer o upload no <span className='highlight-text-color'>GitHub</span>, especialmente se esta for sua primeira vez. Em breve, você terá sua própria <span className='highlight-text-color'>URL</span> para compartilhar com facilidade.
          </p>
        </div>
        <div className='containet-button-start'>
          <p className='title'>Vamos <br /> começar? :)</p>
          <Link className='button-start-now' to='/creation/page1'>Clique aqui! <IconPointer color="#F5F4F8" width={20} /></Link>

        </div>
      </div>

    </section>
  )
}

export default StartNow