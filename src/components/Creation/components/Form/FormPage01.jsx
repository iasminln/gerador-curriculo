import React, { useRef } from 'react'
import InputDefault from '../../../Utils/FormElements/InputDefault'
import { Link } from 'react-router-dom';
import { IconArrowRight } from '../../../Utils/Icons/IconArrowRight';

const FormPage01 = () => {

  const infosCurriculum = [
    {
      label: 'Nome completo',
      type: 'text',
      name: 'complete-name',
      valueRef: useRef(null),
    },
    {
      label: 'E-mail',
      type: 'text',
      name: 'contact-email',
      valueRef: useRef(null),
    },
    {
      label: 'Telefone',
      type: 'tel',
      name: 'contact-phone',
      valueRef: useRef(null),
    },
    {
      label: 'Celular',
      type: 'tel',
      name: 'contact-cellphone',
      valueRef: useRef(null),
    },
    {
      label: 'Link do Linkedin',
      type: 'text',
      name: 'contact-link-linkedin',
      valueRef: useRef(null),
    },
    {
      label: 'Link do GitHub',
      type: 'text',
      name: 'contact-link-github',
      valueRef: useRef(null),
    },
    {
      label: 'Link de blog, portfólio, etc',
      type: 'text',
      name: 'contact-link-blog',
      valueRef: useRef(null),
    }
  ]

  return (
    <section className='creation-form'>
      <div className='container'>
        <p className='form-title'>Informações iniciais de contato</p>
        <div className='grid-form grid-form-01'>
          {infosCurriculum.map((item, index) => {
            return (
              <InputDefault
                key={item.name}
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

        <Link className='button-form' to='/creation/page2'>Continue <IconArrowRight width={20} color='#ffffff' /></Link>

      </div>
    </section>
  )
}

export default FormPage01