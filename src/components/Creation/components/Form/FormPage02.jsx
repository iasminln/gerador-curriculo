import React, { useRef } from 'react'
import InputDefault from '../../../Utils/FormElements/InputDefault'
import { Link } from 'react-router-dom';
import { IconArrowRight } from '../../../Utils/Icons/IconArrowRight';
import ContainerFormGenerator from './utils/ContainerFormGenerator';

const FormPage02 = () => {

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
        <Link className='button-form back animation' to='/creation/page1'><IconArrowRight width={20} color='#ffffff' />Voltar</Link>
        <p className='title-text-20'>Informações profissionais</p>
        <div className='grid-form grid-form-01'>
          {infosCurriculum.map((item, index) => {
            return (
              <InputDefault
                key={item.name}
                legend={item.legend}
                extraClass={`input-initial-infos-${index} input-${index} ${item.singleClass}`}
                type={item.type}
                label={item.label}
                name={item.name}
                valueRef={item.valueRef}
                isTextarea={item.isTextarea}
                defaultValue={localStorage.getItem(`form-${item.name}`)}
              />
            )
          })}
        </div>
        <ContainerFormGenerator />

        <Link className='button-form animation' to='/creation/page3'>Continue <IconArrowRight width={20} color='#ffffff' /></Link>

      </div>
    </section>
  )
}

export default FormPage02