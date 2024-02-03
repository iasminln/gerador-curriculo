import React, { useState } from 'react'
import ImageWebp from './ImageWebp';
import { IconClose } from './Icons/IconClose';


const ImageZoom = ({ imageBigPng, imageBigWebp, imageSmall, alt, ...props }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const getBody = document.body

  const openModal = () => {
    getBody.style.overflow = 'hidden'
    setModalVisible(true)
  }

  const closeModal = () => {
    getBody.style.overflow = 'auto'
    setModalVisible(false)
  }

  return (
    <div className='image-zoom'>
      {modalVisible ?
        <div className='background-modal' onClick={closeModal}>
          <div className='container-modal-image-zoom' onClick={(e) => e.stopPropagation()}>
            <div className='button-close-modal' onClick={closeModal}><IconClose color="#0C0B26" width={20} /></div>
            <ImageWebp
              src={imageBigPng}
              srcWebp={imageBigWebp}
              alt={alt}
              {...props}
            />
          </div>
        </div>
        : null
      }
      <div className='container-image-click' onClick={openModal}>
        <img src={imageSmall} alt={alt} />
      </div>
    </div>
  )
}

export default ImageZoom;