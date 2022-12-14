import React from 'react';
import { useState } from 'react';
import './style.css';
import videoCall from '../../assets/images/videoCall.png';
import coding from '../../assets/images/coding.png';

const Main = () => {

  const [field, setField] = useState();

  return (
    <>
      <main className='content'>
        <div className='first-content'>
          <img src={videoCall} alt='Video Call' />
        </div>
        <div className='first-content-item'>
          <p className='main-paragraph'>
            Alavanque seu negócio com um <span className='website'>Website incrível</span>
          </p>
          <button id="request-order">Solicitar Orçamento</button>
        </div>
        <img src={coding} alt='Coding' />
        <div className='second-content-item'>
          <ul className='services' id='services'>
            <li>
              Domínio Personalizado</li>
            <li>
              Hospedagem
            </li>
            <li>Site responsivo</li>
            <li>Redes sociais</li>
            <li>Chat online</li>
            <li>Blog integrado</li>
          </ul>
          <div className='third-content-item'>
            <p>Nossa equipe está à disposição!</p>
            <div className='contact'>
              <input type='tel' placeholder='Celular' value={field} onChange={(e) => setField(e.target.value)} />
              <button className='callService' onClick={() => setField("")}>Ligamos para você</button>
            </div>
          </div>
        </div>
      </main>
      <div className='cards'>
        <div className="card-one">
          <p>
            Já tive experiências com outras 4 empresas da área e a Codar é
            sem sombra de dúvidas superior em todos os aspectos.
          </p>
          <p>Pedro Ferreira <br />Construtora Minari</p>
        </div>
        <div className="card-two">
          <p>
            Processos bem simples e criação de um site exatamente como a
            minha escola queria!
          </p>
          <p>Maria Rita <br />Escola Criança Feliz</p>
        </div>
      </div>

    </>
  )
}

export default Main;