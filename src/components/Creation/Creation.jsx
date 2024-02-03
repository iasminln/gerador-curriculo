import React from 'react'
import Intro from './components/Intro/Intro'
import FormPage01 from './components/Form/FormPage01'
import FormPage02 from './components/Form/FormPage02'
import { Route, Routes } from 'react-router-dom';

const Creation = () => {
  return (
    <section className='creation'>
      <div className='container-creation'>
        <Intro />
        <Routes>
          <Route path='/page1' element={<FormPage01 />} />
          <Route path='/page2' element={<FormPage02 />} />
        </Routes>
      </div>
    </section>
  )
}

export default Creation