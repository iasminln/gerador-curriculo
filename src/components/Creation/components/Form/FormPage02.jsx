import React, { useRef } from 'react'
import InputDefault from '../../../Utils/FormElements/InputDefault'
import { Link } from 'react-router-dom';
import { IconArrowRight } from '../../../Utils/Icons/IconArrowRight';

const FormPage02 = () => {

  const infosCurriculum = [
    {
      label: 'Resumo profissional',
      legend: 'Descreva de maneira resumida suas habilidades, experiências e objetivos profissionais.',
      type: 'text',
      isTextarea: true,
      name: 'professional-resume',
      valueRef: useRef(null),
    },
    {
      label: 'Experiências profissionais',
      type: 'text',
      isTextarea: true,
      name: 'job-experiences',
      valueRef: useRef(null),
    }
  ]

  return (
    <section className='creation-form'>
      <div className='container'>
        <Link className='button-form back' to='/creation/page1'><IconArrowRight width={20} color='#ffffff' />Voltar</Link>
        <p className='form-title'>Informações profissionais</p>
        <div className='grid-form grid-form-01'>
          {infosCurriculum.map((item, index) => {
            return (
              <InputDefault
                key={item.name}
                legend={item.legend}
                extraClass={`input-initial-infos-${index} input-${index}`}
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

        <Link className='button-form' to='/personalize'>Continue <IconArrowRight width={20} color='#ffffff' /></Link>

      </div>
    </section>
  )
}

export default FormPage02