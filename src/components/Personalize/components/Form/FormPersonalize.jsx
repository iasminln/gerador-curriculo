import React, {useRef} from 'react'
import InputDefault from '../../../Utils/FormElements/InputDefault'
import { Link } from 'react-router-dom'

const Form = () => {

  const personalizeQuestion = [
    {
      label: 'Defina cor do fundo',
      type: 'color',
      name: 'color-background',
      valueRef: useRef(null),
    },
    {
      label: 'Defina cor do texto',
      type: 'color',
      name: 'color-text',
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


        <Link className='button-start-now' to='/generate'>Gerar página!</Link>

      </div>
    </section>
  )
}

export default Form