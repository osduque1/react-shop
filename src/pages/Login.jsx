import React, { useRef } from 'react';
import '@styles/Login.scss';

import logo from '@logos/logo_yard_sale.svg';

const Login = () => {

  const form = useRef(null);

  const handleSubmit = e => {
    e.preventDefault(); // Para evitar que se recargue la página con los datos del formulario
    //Se recomienda el uso de FormData ya que es una forma de enviar archivos más segura
    const formData = new FormData(form.current); // Trae los datos actuales del formulario, con click
    const data = {
      username: formData.get('email'), // Trae el valor del input
      password: formData.get('password'),
    };
    console.log(data);
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo} alt="logo" className="Login-logo"/>
  
        <form action="/" className="form" ref={form}> {/* ref={form} hace la referencia al formulario */}
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input type="text" name="email" placeholder="platzi@example.cm" className="input input-email"/>
  
          <label htmlFor="password" className="label">
            Password
          </label>
          <input type="password" name="password" placeholder="*********" className="input input-password"/>
  
          <button onClick={handleSubmit} className="primary-button login-button">
            Login
          </button>
          <a href="/">
            Forgot my password
          </a>
        </form>
  
        <button className="secondary-button signup-button">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;