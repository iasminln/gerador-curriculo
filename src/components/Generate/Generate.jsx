import React from 'react'
import InputDefault from '../Utils/FormElements/InputDefault';
import { Link } from 'react-router-dom';
import { IconArrowRight } from '../Utils/Icons/IconArrowRight';

const Generate = () => {

  const getInfo = (item) => {
    return localStorage.getItem(item)
  }

  const htmlText = `
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${getInfo('form-complete-name')} - Currículo" />
        <title>${getInfo('form-complete-name')} - Currículo</title>
      
        <style>
          main {
            background: ${getInfo('form-css-color-background')};
            color: ${getInfo('form-css-color-text')};
            font-size: 22px;
            font-weight: 700;
            height: 100vh;
          }
        </style>
      </head>
  
      <body>
        <main>
          <p>Nome: ${getInfo('form-complete-name')}</p>
          <p>Telefone: ${getInfo('form-contact-phone')}</p>
          <p>E-mail: ${getInfo('form-contact-email')}</p>
        </main>
      </body>
    </html>
  `

  const openPreviewWindow = () => {
    const previewWindow = window.open('', '_blank');

    if (previewWindow) {
      previewWindow.document.open();
      previewWindow.document.write(htmlText);
      previewWindow.document.close();
    } else {
      alert('A janela pop-up foi bloqueada pelo navegador. Por favor, permita pop-ups para este site.');
    }
  }

  return (
    <section className='generate'>
      <div className='container-generate'>
        <Link className='button-form back animation' to='/personalize'><IconArrowRight width={20} color='#ffffff' />Voltar</Link>
        <InputDefault
          rows={4}
          cols='10'
          isTextarea={true}
          value={htmlText}
          readOnly
        />
        <button className='button-form' onClick={openPreviewWindow}>Clique para visualizar a página</button>
      </div>
    </section>
  )
}

export default Generate