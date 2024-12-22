import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import logo from '../Assets/IMAGEM_1.png';
// import logoBaixo from '../Assets/nuvemBaixo.png';

const Apresentacao = () => {
  return (
    <div className="apresentacao">
      <img src={logo} alt="Logo Esquerda" className="image-left" />
      <img src={logo} alt="Logo Direita" className="image-right" />
      {/* <img src={logoBaixo} alt="Logo Baixo" className="image-bottom" /> */}
    </div>
  );
};

export default Apresentacao;