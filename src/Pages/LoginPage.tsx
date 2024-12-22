import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
      <div>
        <p>Não tem uma conta? <Link to="/register">Cadastre-se</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
