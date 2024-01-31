import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './css/style.scss'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Creation from './components/Creation/Creation';

const App = () => {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/creation' element={<Creation />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
};

export default App;
