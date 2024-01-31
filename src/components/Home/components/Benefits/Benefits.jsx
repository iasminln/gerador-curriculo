import React from 'react'
import DoubleTitle from '../../../Utils/DoubleTitle'

const listBenefits = [
  {
    title: "Visibilidade 24/7",
    text: "Acesso contínuo por parte de empregadores ou recrutadores."
  },
  {
    title: "Destaque visual e criativo",
    text: "Destacar habilidades de forma atraente, com criatividade e se diferenciando da concorrência."
  },
  {
    title: "Link fácil de compartilhar",
    text: "URL única para compartilhar via e-mail, redes sociais ou cartões de visita."
  },
  {
    title: "Atualizações rápidas",
    text: "Capacidade de fazer alterações instantâneas na página do currículo."
  },
  {
    title: "Integração de multimídia",
    text: "Adição de links para projetos, portfólio ou vídeos para uma visão mais completa."
  },
  {
    title: "Adaptação móvel",
    text: "Currículo otimizado para dispositivos móveis, facilitando a visualização em qualquer lugar."
  }
]


const Benefits = () => {
  return (
    <section className='benefits' aria-label='Vantagens'>
      <div className='container'>
        <DoubleTitle title="Mas por que ter um currículo online?" backTitle={false} />
        <ul className='list-benefits'>
          {listBenefits.map((item) => {
            return (
              <div className='box-benefits'>
                <p className='title-box-benefits'>{item.title}</p>
                <p className='text-box-benefits'>{item.text}</p>
              </div>
            )
          })}
        </ul>
      </div>

    </section>
  )
}

export default Benefits