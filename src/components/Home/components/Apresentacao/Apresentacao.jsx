import React from 'react'
import ImageWebp from '../../../Utils/ImageWebp'
import MainImagePng from '../../../../assets/main-image-logo.png'
import MainImageWebp from '../../../../assets/main-image-logo.webp'
import BlueBox from '../../../Utils/BlueBox'
import { IconDesigner, IconDev, IconProfesional } from '../icons'

const Apresentacao = () => {

  const colorIcons = '#C1121F'

  return (
    <section className='apresentacao' aria-label='Apresentação.'>
      <div className='container'>
        <ImageWebp
          src={MainImagePng}
          srcWebp={MainImageWebp}
          alt='Imagem decorativa representando currículos'
          width='auto'
          height='auto'
        />
        <BlueBox>
          <p className='list-with-icons'>
            <IconDev color={colorIcons} width={25} />
            <span>Você está no início da carreira de <span className='highlight-text-color'>desenvolvimento</span> e possui pouca experiência em programação web?</span>
          </p>

          <p className='list-with-icons'>
            <IconDesigner color={colorIcons} width={22} />
            <span>Você é um <span className='highlight-text-color'>designer</span> em busca de uma página para exibir sua coleção de trabalhos?</span>
          </p>

          <p className='list-with-icons'>
            <IconProfesional color={colorIcons} width={20} />
            <span>Você é <span className='highlight-text-color'>profissional</span> em qualquer campo e deseja uma página web atrativa para servir como seu currículo online?</span>
          </p>

        </BlueBox>
      </div>

    </section>
  )
}

export default Apresentacao