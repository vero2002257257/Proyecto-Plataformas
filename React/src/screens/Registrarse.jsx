import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RegistroForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); // Mostrar animación de carga

      // Enviar solicitud de registro al backend
      const response = await axios.post('http://localhost:5000/register', {
        username,
        password,
        email
      });

      setLoading(false); // Ocultar animación de carga

      // Manejar la respuesta del backend
      const { message, data } = response.data;
      setSuccess(true);
      setError('');
      console.log(message, data);
       // Redirigir a una nueva pestaña
       window.open('/Crear/', '/Crear/');

    } catch (error) {
      setLoading(false); // Ocultar animación de carga

      // Manejar errores de la solicitud
      setError('Error en el registro de user');

      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <h1 style={{ fontSize: '36px', marginBottom: '24px' }}>Regístrate 🧾 </h1> {/* Título grande "Regístrate" */}
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '300px',
          padding: '24px',
          backgroundColor: 'lightgray',
          borderRadius: '10px',
        }}
      >
        {success && <p style={{ color: 'green' }}>Registro exitoso</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {loading && <p>Cargando...</p>}
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            marginBottom: '12px',
            borderRadius: '25px',
            padding: '12px',
            fontSize: '18px',
            border: '2px solid #7620ff', // Color de borde #7620ff
          }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            marginBottom: '12px',
            borderRadius: '25px',
            padding: '12px',
            fontSize: '18px',
            border: '2px solid #7620ff', // Color de borde #7620ff
          }}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          Registrarse
        </button>
       
      </form>
    </div>
  );
};

export default RegistroForm;