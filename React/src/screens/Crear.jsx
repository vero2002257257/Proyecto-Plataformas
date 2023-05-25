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
    <div className="formulario-perfil-container" style={{ textAlign: 'center', background: 'linear-gradient(to bottom, #F4F4F4, #cb9bde)', minHeight: '100vh' }}>
      <h1 style={{ color: '#7620ff', marginBottom: '20px' }}>Crear perfil</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="form-group">
          <label style={{ color: '#7620ff', fontSize: '20px' }}>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            style={{ color: 'purple', fontSize: '20px' }}
          />
        </div>
        <div className="form-group">
          <label style={{ color: '#7620ff', fontSize: '20px' }}>Edad:</label>
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            required
            min="18"
            style={{ color: 'purple', fontSize: '20px' }}
          />
        </div>
        <div className="form-group">
          <label style={{ color: '#7620ff', fontSize: '20px' }}>Sexo:</label>
          <select
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
            required
            style={{ color: 'purple', fontSize: '20px' }}
          >
            <option value="">Elegir sexo</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
        </div>
        <div className="form-group">
          <label style={{ color: '#7620ff', fontSize: '20px' }}>Descripción:</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
            style={{ color: 'purple', fontSize: '20px' }}
          />
        </div>
        <div className="form-group">
          <label style={{ color: '#7620ff', fontSize: '20px' }}>Gustos:</label>
          <div className="gustos-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {opcionesGustos.map((gusto) => (
              <button
                key={gusto}
                className={`gusto-button ${gustos.includes(gusto) ? 'selected' : ''}`}
                onClick={() => handleGustoToggle(gusto)}
                style={{ fontSize: '18px', backgroundColor: gustos.includes(gusto) ? '#7620ff' : 'gray', color: 'white', borderRadius: '30px', padding: '12px 29px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s ease-in-out', margin: '5px' }}
              >
                {gusto}
              </button>
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
          <label style={{ color: '#7620ff', fontSize: '20px' }}></label>
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
            color: 'white',
            borderRadius: '30px',
            padding: '12px 29px',
            border: 'none',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.3s ease-in-out',
            alignSelf: 'center', // Centrar el botón verticalmente
            marginTop: '20px', // Agregar margen superior
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = isLoading ? 'gray' : '#6c1df2'}
          onMouseLeave={(e) => e.target.style.backgroundColor = isLoading ? 'gray' : '#7620ff'}
          disabled={isLoading}
        >
          {isLoading ? 'Creando perfil...' : 'Crear perfil'}
        </button>
      </form>
      {isSubmitted && (
        <p style={{ marginTop: '20px', fontSize: '18px', color: 'green' }}>
          ¡Perfil creado exitosamente!
        </p>
      )}
    </div>
  );
};

export default FormularioPerfil;

