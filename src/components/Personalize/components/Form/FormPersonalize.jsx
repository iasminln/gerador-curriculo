import React, { useRef } from 'react'
import InputDefault from '../../../Utils/FormElements/InputDefault'
import { Link } from 'react-router-dom'
import { IconArrowRight } from '../../../Utils/Icons/IconArrowRight'

const Form = () => {

  const personalizeQuestion = [
    {
      label: 'Defina cor do fundo',
      type: 'color',
      name: 'css-color-background',
      valueRef: useRef(null),
    },
    {
      label: 'Defina cor do texto',
      type: 'color',
      name: 'css-color-text',
      valueRef: useRef(null),
    }
  ]

  return (
    <section className='creation-form-personalize'>
      <div className='container'>

        {/* <RadioDefault
          label='posição do texto'
          name='text-position'
          options={options}
        /> */}
        <Link className='button-form back animation' to='/creation/page2'><IconArrowRight width={20} color='#ffffff' />Voltar</Link>

        {personalizeQuestion.map((item) => {

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


        <Link className='button-form animation' to='/generate'>Gerar página! <IconArrowRight width={20} color='#ffffff' /></Link>

      </div>
    </section>
  )
}

export default Form