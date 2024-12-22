import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import logo from '../Assets/nuvem2.png';
import logoBaixo from '../Assets/nuvemBaixo.png';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Bem-vindo à nossa página!</h1>
      <Link to="/register">
        <button>Quero Participar</button>
      </Link>
      <img src={logo} alt="Logo Esquerda" className="image-left" />
      <img src={logo} alt="Logo Direita" className="image-right" />
      <img src={logoBaixo} alt="Logo Baixo" className="image-bottom" />
    </div>
  );
};

export default HomePage;
