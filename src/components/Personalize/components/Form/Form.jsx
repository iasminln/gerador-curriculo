import React, { useRef } from 'react'
import RadioDefault from './RadioDefault'
import { Link } from 'react-router-dom';

const Form = () => {

  // const infosCurriculum = [
  //   {
  //     label: 'Nome completo',
  //     type: 'text',
  //     name: 'complete-name',
  //     valueRef: useRef(null),
  //   },
  //   {
  //     label: 'Telefone',
  //     type: 'text',
  //     name: 'contact-phone',
  //     valueRef: useRef(null),
  //   },
  //   {
  //     label: 'E-mail',
  //     type: 'text',
  //     name: 'contact-email',
  //     valueRef: useRef(null),
  //   }
  // ]

  const options = ['direita', 'esquerda', 'centro']

  return (
    <section className='creation-form'>
      <div className='container'>
        {/* {infosCurriculum.map((item) => {

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
        })} */}

            <RadioDefault
              
              label='posição do texto'
              name='text-position'
              options={options}
              // defaultValue={localStorage.getItem(`form-text-position`)}
              // checked={localStorage.getItem(`form-text-position`)}
            />
              


        {/* <Link className='button-start-now' to='/personalize'>Continue</Link> */}

      </div>
    </section>
  )
}

export default Form