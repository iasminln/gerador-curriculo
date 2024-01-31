import React from 'react'
import { IconCheckLogo } from './Icons'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='container-logo'>
        <Link className='logo' to="/">Gerador de Currículo <IconCheckLogo color="#C1121F" width={30} /></Link>
      </div>

    </header>
  )
}

export default Header