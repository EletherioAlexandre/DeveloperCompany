import React from 'react'
import './style.css'
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="title">
        <h2>Codar.</h2>
        <p>Criamos websites incríveis</p>
      </div>
      <div className="footer-content">
        <div className="about">
          <h2>Sobre</h2>
          <p>Amamos criar soluções e entregar sites incríveis</p>
        </div>
        <div className="contato">
          <h2>Contato</h2>
          <p>123 Av. Manjar - Nárnia</p>
          <p>+55 96 2321-3131</p>
          <p>contato@codar.com</p>
        </div>
        <div className="social-media">
          <h2>Redes Sociais</h2>
          <div className="icons">
          <a href="https://www.facebook.com/" className='Facebook' target="_blank" rel="noreferrer"><FaFacebookSquare style={{'color': 'red','width': '50px', 'height': '50px'}}/></a>
          <a href="https://www.instagram.com/_eletherioalex/" className='Instagram' target="_blank" rel="noreferrer"><FaInstagram style={{'color': 'red','width': '50px', 'height': '50px'}}/></a>
          <a href="https://www.linkedin.com/in/alexandre-eletherio-ab799719a/" className='Linkedin' target="_blank" rel="noreferrer"><FaLinkedin style={{'color': 'red','width': '50px', 'height': '50px'}}/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer