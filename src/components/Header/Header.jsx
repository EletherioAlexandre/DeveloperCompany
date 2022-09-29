import React from 'react'
import { useState } from 'react';
import './style.css'

const Header = () => {

  return (
    <>
    <nav>
      <h1>Codar<span>.</span></h1>
      <ul>
        <li><a href='/'>Início</a></li>
        <li><a href='/'>Serviços</a></li>
        <li><a href='/'>Contato</a></li>
        {/* <li><a href='/'>Login</a></li> */}
      </ul>
    </nav>
    </>
  )
}

export default Header