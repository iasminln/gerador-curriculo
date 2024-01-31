import React from 'react'

const DoubleTitle = ({ title, backTitle }) => {


  return (
    <div className='container-double-title'>
      <h2 className='double-title-text'>{ title }.</h2>
      {backTitle ? <span className='double-title-text-second'>{ title }.</span> : null}
    </div>
  )
}

export default DoubleTitle;