import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './css/style.scss'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Creation from './components/Creation/Creation';
import Personalize from './components/Personalize/Personalize'
import Generate from './components/Generate/Generate';


const App = () => {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/creation' element={<Creation />} />
          <Route path='/personalize' element={<Personalize />} />
          <Route path='/generate' element={<Generate />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
};

export default App;
