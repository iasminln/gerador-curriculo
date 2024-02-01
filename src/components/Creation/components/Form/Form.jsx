import React, { useRef } from 'react'
import InputDefault from './InputDefault'
import { Link } from 'react-router-dom';

const Form = () => {

  const infosCurriculum = [
    {
      label: 'Nome completo',
      type: 'text',
      name: 'complete-name',
      valueRef: useRef(null),
    },
    {
      label: 'Telefone',
      type: 'text',
      name: 'contact-phone',
      valueRef: useRef(null),
    },
    {
      label: 'E-mail',
      type: 'text',
      name: 'contact-email',
      valueRef: useRef(null),
    }
  ]

  return (
    <section className='creation-form'>
      <div className='container'>
        {infosCurriculum.map((item) => {

          return (
            <InputDefault
              key={item.name}
              type={item.type}
              label={item.label}
              name={item.name}
              valueRef={item.valueRef}
              defaultValue={localStorage.getItem(`form-${item.name}`)}
            />
          )
        })}

        <Link className='button-start-now' to='/personalize'>Continue</Link>

      </div>
    </section>
  )
}

export default Form