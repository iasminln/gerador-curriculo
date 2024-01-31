import React from 'react'
import DoubleTitle from './DoubleTitle'

const BlueBox = ({ children, title, backTitle }) => {
  return (
    <>
      <div>
        {title ? <DoubleTitle title={title} backTitle={backTitle} /> : null}
        <div className='container-blue-box'>
          {children}
        </div>
      </div>
    </>
  )
}

export default BlueBox