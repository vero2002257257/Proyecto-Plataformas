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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar que la edad sea mayor o igual a 18
    const edadNum = parseInt(edad, 10);
    if (isNaN(edadNum) || edadNum < 18) {
      alert('La edad debe ser de 18 años en adelante para que puedas disfrutar de nuestra red social');
      return;
    }
    // Lógica para enviar los datos del perfil al backend o hacer cualquier otro procesamiento

    // Reiniciar los campos de texto después de enviar el formulario
    setNombre('');
    setEdad('');
    setSexo('');
    setDescripcion('');
    setFoto(null);
    setGustos([]);
  };

  return (
    <div className="formulario-perfil-container" style={{ textAlign: 'center', background: 'linear-gradient(to bottom, #F4F4F4, #cb9bde)', minHeight: '100vh' }}>
      <h1 style={{ color: '#7620ff', marginBottom: '20px' }}>Crear perfil</h1>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block' }}>
        <div className="form-group">
          <label style={{ color: '#7620ff' }}>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            style={{ color: 'purple' }}
          />
        </div>
        <div className="form-group">
          <label style={{ color: '#7620ff' }}>Edad:</label>
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            required
            min="18"
            style={{ color: 'purple' }}
          />
        </div>
        <div className="form-group">
          <label style={{ color: '#7620ff' }}>Sexo:</label>
          <input
            type="text"
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
            required
            style={{ color: 'purple' }}
          />
        </div>
        <div className="form-group">
          <label style={{ color: '#7620ff' }}>Descripción:</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
            style={{ color: 'purple' }}
          />
        </div>
        <div className="form-group">
          <label style={{ color: '#7620ff' }}></label>
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
        <div className="form-group">
          <label style={{ color: '#7620ff' }}>Gustos:</label>
          <div className="gustos-container">
            {opcionesGustos.map((gusto) => (
              <button
                key={gusto}
                className={`gusto-button ${gustos.includes(gusto) ? 'selected' : ''}`}
                onClick={() => handleGustoToggle(gusto)}
              >
                {gusto}
              </button>
            ))}
          </div>
          <ul className="gustos-list">
            {gustos.map((gusto) => (
              <li key={gusto} style={{ color: 'purple' }}>{gusto}</li>
            ))}
          </ul>
        </div>
        <button type="submit" style={{ backgroundColor: '#7620ff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', marginTop: '10px' }}>
          Ver perfil
        </button>
      </form>
    </div>
  );
};

export default FormularioPerfil;
