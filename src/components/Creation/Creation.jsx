import React from 'react'
import { Route, Routes } from 'react-router-dom';
import FormPage01 from './components/Form/FormPage01'
import FormPage02 from './components/Form/FormPage02'
import FormPage03 from './components/Form/FormPage03'

const Creation = () => {
  return (
    <section className='creation'>
      <div className='container-creation'>
        <Routes>
          <Route path='/page1' element={<FormPage01 />} />
          <Route path='/page2' element={<FormPage02 />} />
          <Route path='/page3' element={<FormPage03 />} />
        </Routes>
      </div>
    </section>
  )
}

export default Creation