import React, { useRef, useState } from 'react'
import InputDefault from '../../../../Utils/FormElements/InputDefault'


const ContainerFormGenerator = () => {
  const basicJobInfos = [
    [
      {
        label: 'Cargo',
        type: 'text',
        valueRef: useRef(null),
        name: 'job-information-cargo'
      },
      {
        label: 'Empresa',
        type: 'text',
        valueRef: useRef(null),
        name: 'job-information-empresa'
      },
      {
        label: 'Início',
        type: 'date',
        valueRef: useRef(null),
        name: 'job-information-inicio'
      },
      {
        label: 'Fim',
        type: 'date',
        valueRef: useRef(null),
        name: 'job-information-fim'
      },
      {
        label: 'Descrição das atividades',
        type: 'text',
        isTextarea: true,
        valueRef: useRef(null),
        name: 'job-information-description'
      }
    ]
  ]

  const [allJobInfos, setAllJobInfos] = useState([...basicJobInfos])
  const [total, setTotal] = useState(0)


  const handleClickMoreJob = () => {
    setAllJobInfos([...allJobInfos, ...basicJobInfos])
    setTotal(total + 1)
  }

  const handleClickLessJob = () => {
    allJobInfos.pop()
    setAllJobInfos([...allJobInfos])
    setTotal(total - 1)
  }


  return (
    <section className='form-generator'>
      <div className='container-form-generator'>
      <p className='form-title'>Adicione até 3 experiências de trabalho relevantes!</p>
        {allJobInfos.map((jobXp, index) => {
          return (
            <div key={index}>
              <p className='form-title'>Experiência {index + 1}:</p>
              <div className={`form-job-xp-${index} grid-form `}>

                {jobXp.map((item) => {
                  return (
                    <InputDefault
                      key={`${item.name}-${index}`}
                      legend={item.legend}
                      extraClass={`input-initial-infos-${index} input-${item.name}-${index}`}
                      type={item.type}
                      label={item.label}
                      name={`${item.name}-${index}`}
                      valueRef={item.valueRef}
                      isTextarea={item.isTextarea}
                      defaultValue={localStorage.getItem(`form-${index}-${item.name}`)}
                    />
                  )
                })}
              </div>
            </div>
          )
        })}


        <button className='button-form' disabled={total === 0 ? true : false} onClick={handleClickLessJob}>remova</button>
        <button className='button-form' disabled={total === 2 ? true : false} onClick={handleClickMoreJob}>adicione mais</button>
      </div>
    </section>
  )
}

export default ContainerFormGenerator