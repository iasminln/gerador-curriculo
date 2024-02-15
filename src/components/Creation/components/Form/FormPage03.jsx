import React, { useRef } from 'react'
import InputDefault from '../../../Utils/FormElements/InputDefault'
import { Link } from 'react-router-dom';
import { IconArrowRight } from '../../../Utils/Icons/IconArrowRight';
import ContainerFormGenerator from './utils/ContainerFormGenerator';

const FormPage03 = () => {

  const infosCurriculum = [
    {
      label: 'Resumo profissional',
      legend: 'Descreva de maneira resumida suas habilidades, experiências e objetivos profissionais.',
      type: 'text',
      isTextarea: true,
      name: 'professional-resume',
      valueRef: useRef(null),
      singleClass: 'column-full-width'
    }
  ]

  return (
    <section className='creation-form'>
      <div className='container'>
        <Link className='button-form back animation' to='/creation/page2'><IconArrowRight width={20} color='#ffffff' />Voltar</Link>
        <p className='title-text-20'>Formação</p>
        <div className='grid-form grid-form-01'>
         
        </div>
        <ContainerFormGenerator />

        <Link className='button-form animation' to='/personalize'>Continue <IconArrowRight width={20} color='#ffffff' /></Link>

      </div>
    </section>
  )
}

export default FormPage03