import React, { useState } from 'react'
import ImageWebp from './ImageWebp';


const ImageZoom = ({ imageBigPng, imageBigWebp, imageSmall, alt, ...props }) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <div className='image-zoom'>
      {modalVisible ?
        <div className='background-modal' onClick={() => setModalVisible(false)}>
          <div className='container-modal-image-zoom' onClick={(e) => e.stopPropagation()}>
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
      <div className='container-image-click' onClick={() => setModalVisible(true)}>
        <img src={imageSmall} alt={alt} />
      </div>
    </div>
  )
}

export default ImageZoom;