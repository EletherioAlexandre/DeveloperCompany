import React from 'react'
import './style.css'

const Header = () => {

  return (
    <>
    <nav>
      <h1>Codar<span>.</span></h1>
      <ul className='ul-nav'>
        <li className='nav-item'><a href='/'>Início</a></li>
        <li className='nav-item'><a href='/'>Serviços</a></li>
        <li className='nav-item'><a href='/'>Contato</a></li>
        <li className="login-button nav-item"><a href='/'>Login</a></li>
      </ul>
    </nav>
    </>
  )
}

export default Header