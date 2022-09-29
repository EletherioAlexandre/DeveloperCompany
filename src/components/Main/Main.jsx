import React from 'react';
import './style.css';
import image from '../../assets/images/videoCall.png';
const Main = () => {
  return (
    <div className='conteudo'>
      <img src={image} alt='Video Call'/>
      <div className='conteudo-item'>
      <p>
        Alavanque seu negócio com um <span>Website incrível</span>
      </p>
      <button>Solicitar Orçamento</button>
      </div>
    </div>
  )
}

export default Main;