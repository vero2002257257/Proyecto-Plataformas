import React, { useState } from 'react';
import Axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Realizar solicitud POST al backend con los datos de inicio de sesión
      const response = await Axios.post('/login', {
        username,
        password
      });

      // Verificar si la respuesta es exitosa
      if (response.status === 200) {
        // Mostrar mensaje de éxito
        alert('Inicio de sesión exitoso');
      }
    } catch (error) {
      // Mostrar mensaje de error en caso de error en la respuesta del backend
      setErrorMessage('Credenciales inválidas');
    }
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;
