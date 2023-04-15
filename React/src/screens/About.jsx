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
      const response = await Axios.post('http://localhost:5000/login', {
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
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Inicia sesión👤</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)}
          style={{
            marginBottom: '12px',
            borderRadius: '25px',
            padding: '12px',
            fontSize: '18px',
            border: '2px solid #7620ff', // Color de borde #7620ff
          }}
        />
        <input
          type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}
          style={{
            marginBottom: '12px',
            borderRadius: '25px',
            padding: '12px',
            fontSize: '18px',
            border: '2px solid #7620ff', // Color de borde #7620ff
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: 'gray',
            color: 'white',
            borderRadius: '30px',
            padding: '12px 29px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease-in-out',
            alignSelf: 'center', // Centrar el botón verticalmente
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#7620ff'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'gray'}
        >
          Iniciar sesión 👤
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
