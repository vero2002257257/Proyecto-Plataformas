import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const FormularioPerfil = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [sexo, setSexo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [foto, setFoto] = useState(null);
  const [gustos, setGustos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const opcionesGustos = [
    'Restaurante',
    'Teatro',
    'Picnic',
    'Bar',
    'Concierto',
    'Atracciones',
    'Cine',
    'Mirador',
    'Motel',
    'Puebliar',
    'Videojuegos',
    'Fiesta'
  ];

  const handleGustoToggle = (gusto) => {
    if (gustos.includes(gusto)) {
      setGustos(gustos.filter((item) => item !== gusto));
    } else {
      setGustos([...gustos, gusto]);
    }
  };

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    setFoto(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validar que la edad sea mayor o igual a 18
    const edadNum = parseInt(edad, 10);
    if (isNaN(edadNum) || edadNum < 18) {
      alert('La edad debe ser de 18 años en adelante para que puedas disfrutar de nuestra red social');
      setIsLoading(false);
      return;
    }

    try {
      // Lógica para enviar los datos del perfil al backend o hacer cualquier otro procesamiento
      // Puedes utilizar la biblioteca axios para hacer solicitudes HTTP
      // await axios.post('/api/crear-perfil', { nombre, edad, sexo, descripcion, gustos, foto });

      // Mostrar mensaje de éxito
      setIsSubmitted(true);
      alert('¡Perfil creado exitosamente!');
    } catch (error) {
      // Mostrar mensaje de error en caso de fallo
      alert('Hubo un error al crear el perfil. Por favor, intenta nuevamente.');
    } finally {
      // Reiniciar los campos de texto después de enviar el formulario
      setNombre('');
      setEdad('');
      setSexo('');
      setDescripcion('');
      setFoto(null);
      setGustos([]);
      setIsLoading(false);
    }
  };

  return (
    <div className="formulario-perfil-container" style={{ textAlign: 'center', background: '#7620ff', minHeight: '100vh' }}>
     <h1 style={{ 
        color: '#fdecda',
        marginBottom: '20px',
        fontFamily: 'Arial, sans-serif',
        fontSize: '36px',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        animation: 'pulse 1s infinite',
    }}>
  Crear perfil🤳🏻
</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="form-group">
          <label className="label-style"></label>
          <input
            type="text"
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
            required
            style={{ marginBottom: '12px', borderRadius: '17px', padding: '7px', fontSize: '18px', border: '2px solid #7620ff' }}
          />
        </div>
        <div className="form-group">
          <label className="label-style"></label>
          <input
            type="number"
            placeholder="Edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            required
            min="18"
            style={{ marginBottom: '12px', borderRadius: '17px', padding: '7px', fontSize: '18px', border: '2px solid #7620ff' }}
          />
        </div>
        <div className="form-group">
          <label className="label-style"></label>
          <select
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
            required
            style={{ marginBottom: '12px', borderRadius: '17px', padding: '7px', fontSize: '18px', border: '2px solid #7620ff' }}
          >
            <option value="" disabled>Elegir sexo</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
        </div>

        <div className="form-group">
        <label className="label-style"></label>
          <input
            type="text"
            placeholder="Descripción"
            onChange={(e) => setDescripcion(e.target.value)}
            required
            style={{ marginBottom: '12px', borderRadius: '17px', padding: '9px', fontSize: '18px', border: '2px solid #7620ff' }}
          />
        </div>
        <div className="form-group">
        <h1 style={{ color: '#e3c9df', marginBottom: '20px' }}>Elige tus gustos</h1>
          <div className="gustos-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {opcionesGustos.map((gusto) => (
                //Boton
                <button
                key={gusto}
                className={`gusto-button ${gustos.includes(gusto) ? 'selected' : ''}`}
                onClick={() => handleGustoToggle(gusto)}
                style={{
                  fontSize: '18px',
                  backgroundColor: 'transparent',
                  color: 'white',
                  borderRadius: '30px',
                  padding: '12px 29px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease-in-out',
                  alignSelf: 'center',
                  marginTop: '20px',
                }}
                onMouseEnter={(e) => e.target.style.color = '#cc9ce6'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                {gusto}
              </button>
              
              //Termina
            ))}
          </div>
          <ul className="gustos-list">
            {gustos.map((gusto) => (
              <li key={gusto} style={{ color: 'purple', fontSize: '18px' }}>
                {gusto}
              </li>
            ))}
          </ul>
        </div>
        <div className="form-group">
          <label className="label-style"></label>
          <label htmlFor="foto" className="foto-label">
            <FontAwesomeIcon icon={faPlus} className="add-icon" />
            Agregar foto
          </label>
          <input
            type="file"
            id="foto"
            accept="image/*"
            onChange={handleFotoChange}
            required
            style={{ display: 'none' }}
          />
          {foto && (
            <img
              src={URL.createObjectURL(foto)}
              alt="Foto de perfil"
              style={{ maxWidth: '200px', marginTop: '10px' }}
            />
          )}
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: isLoading ? 'gray' : '#7620ff',
            color: '#7620ff',
            borderRadius: '30px',
            padding: '12px 29px',
            border: 'none',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.3s ease-in-out',
            alignSelf: 'center', // Centrar el botón verticalmente
            marginTop: '20px', // Agregar margen superior
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = isLoading ? 'gray' : '#6c1df2'}
          onMouseLeave={(e) => e.target.style.backgroundColor = isLoading ? 'gray' : '#e3c9df'}
          disabled={isLoading}
        >
          {isLoading ? 'Creando perfil...' : 'Crear perfil'}
        </button>
      </form>
      {isSubmitted && (
        <p style={{ marginTop: '20px', fontSize: '18px', color: '#e3c9df' }}>
          ¡Perfil creado exitosamente!
        </p>
      )}
    </div>
  );
};

export default FormularioPerfil;
