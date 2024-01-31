import React from 'react'
import BlueBox from '../../../Utils/BlueBox'
import ImageWebp from '../../../Utils/ImageWebp'
import ImageSeeCurriculumPng from '../../../../assets/image-see-curriculum.png'
import ImageSeeCurriculumWebp from '../../../../assets/image-see-curriculum.webp'
import ImageZoom from '../../../Utils/ImageZoom'

import Image01Jpg from '../../../../assets/image-step-01-01.jpg'
import Image01Webp from '../../../../assets/image-step-01-01.webp'
import Image01Mini from '../../../../assets/image-step-01-01-mini.jpg'

import Image02Jpg from '../../../../assets/image-step-02-01.jpg'
import Image02Webp from '../../../../assets/image-step-02-01.webp'
import Image02Mini from '../../../../assets/image-step-02-01-mini.jpg'

import Image03Jpg from '../../../../assets/image-step-02-02.jpg'
import Image03Webp from '../../../../assets/image-step-02-02.webp'
import Image03Mini from '../../../../assets/image-step-02-02-mini.jpg'



const Steps = () => {



  return (
    <section className='steps' aria-label='Passo a passo'>
      <div className='container'>
        <div className='image'>
          <ImageWebp
            src={ImageSeeCurriculumPng}
            srcWebp={ImageSeeCurriculumWebp}
            alt='Imagem decorativa de uma pessoa olhando um currículo'
            width='auto'
            height='auto'
          />
        </div>
        <p className='title-steps'>Eu já gerei, copiei e salvei meu código, <span className='highlight-text-color'>e agora?</span></p>


        <div className='box-steps box01'>
          <BlueBox title={"1º passo."} backTitle={true}>
            <p>Você já possui conta no GitHub? Esse é o primeito passo.</p>
            <p>Acesse o link: <a href="https://github.com/" target='_blank' rel="noreferrer"><span className='highlight-text-color'>https://github.com</span>.</a></p>
            <p>Clique em <em>Sign up</em>.</p>
            <ImageZoom
              imageBigPng={Image01Jpg}
              imageBigWebp={Image01Webp}
              imageSmall={Image01Mini}
              alt="Imagem com o primeiro passo para criar conta no GitHub, indicando que você deve clicar em Sign Up no canto superior direito."
            />
          </BlueBox>
        </div>

        <div className='box-steps box02'>
          <BlueBox title={"2º passo."} backTitle={true}>
            <p>
              Siga os próximos passos, preenchendo seu e-mail, username e criando uma boa senha. Após clicar em Continue, você fará um pequeno teste para provar que não é um robô 🤖
            </p>
            <p>Na próxima tela você terá que inserir um código que será enviado para o seu e-mail.</p>
            <div className='box02-images'>
              <ImageZoom
                imageBigPng={Image02Jpg}
                imageBigWebp={Image02Webp}
                imageSmall={Image02Mini}
                alt="Imagem com o segundo passo para criar conta no GitHub, indicando que você deve preencher seus dados de username, e-mail e senha."
              />
              <ImageZoom
                imageBigPng={Image03Jpg}
                imageBigWebp={Image03Webp}
                imageSmall={Image03Mini}
                alt="Imagem com o terceiro passo para criar conta no GitHub, indicando que você deve inserir um código que receberá por e-mail."
              />
            </div>
          </BlueBox>
        </div>
      </div>

    </section>
  )
}

export default Steps