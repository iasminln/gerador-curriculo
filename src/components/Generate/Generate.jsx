import React from 'react'
import { Link } from 'react-router-dom'
import InputDefault from '../Utils/FormElements/InputDefault';
import { htmlText } from './Code/Code';

const Generate = () => {

  const openPreviewWindow = () => {
    const previewWindow = window.open('', '_blank');
    
    if (previewWindow) {
      previewWindow.document.open();
      previewWindow.document.write(htmlText);
      previewWindow.document.close();
    } else {
      // Tratar o caso em que a janela pop-up foi bloqueada pelo navegador
      alert('A janela pop-up foi bloqueada pelo navegador. Por favor, permita pop-ups para este site.');
    }
  }
  

  return (
    <section className='generate'>
      <div className='container-generate'>
        <InputDefault
          rows='5'
          cols='10'
          isTextarea={true}
          value={htmlText}
          readOnly
        />

        <button onClick={openPreviewWindow}>Clique para visualizar a página</button>
      </div>

      

    </section>
  )
}

export default Generate