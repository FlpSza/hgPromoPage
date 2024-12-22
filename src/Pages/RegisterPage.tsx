import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div>
      <h2>Cadastrar</h2>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Cadastrar</button>
      </form>
      <div>
        <p>Já tem uma conta? <Link to="/login">Faça login</Link></p>
      </div>
    </div>
  );
};

export default RegisterPage;
