import React, { useState } from 'react';

const FormularioCompra = () => {
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [nombreTitular, setNombreTitular] = useState('');
  const [fechaVencimiento, setFechaVencimiento] = useState('');
  const [cvv, setCvv] = useState('');
  const [banco, setBanco] = useState('');
  const [monto, setMonto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de compra con los datos ingresados
    // por el usuario, por ejemplo, enviarlos a un servidor para procesar
    // la compra y mostrar un mensaje de confirmación o error.
    console.log('Datos de compra:', {
      numeroTarjeta,
      nombreTitular,
      fechaVencimiento,
      cvv,
      banco,
      monto,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Datos de pago 💳</h1>
      <input
        type="text"
        placeholder="Número de Tarjeta"
        value={numeroTarjeta}
        onChange={(e) => setNumeroTarjeta(e.target.value)}
        style={{ fontSize: '18px', padding: '10px', margin: '10px', width: '300px' }} // Estilos del campo
      />
      <input
        type="text"
        placeholder="Nombre del Titular"
        value={nombreTitular}
        onChange={(e) => setNombreTitular(e.target.value)}
        style={{ fontSize: '18px', padding: '10px', margin: '10px', width: '300px' }} // Estilos del campo
      />
      <input
        type="text"
        placeholder="Fecha de Vencimiento"
        value={fechaVencimiento}
        onChange={(e) => setFechaVencimiento(e.target.value)}
        style={{ fontSize: '18px', padding: '10px', margin: '10px', width: '300px' }} // Estilos del campo
      />
      <input
        type="text"
        placeholder="CVV"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
        style={{ fontSize: '18px', padding: '10px', margin: '10px', width: '300px' }} // Estilos del campo
      />
      <input
        type="text"
        placeholder="Banco"
        value={banco}
        onChange={(e) => setBanco(e.target.value)}
        style={{ fontSize: '18px', padding: '10px', margin: '10px', width: '300px' }} // Estilos del campo
      />
      <input
        type="text"
        placeholder="Monto"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
        style={{ fontSize: '18px', padding: '10px', margin: '10px', width: '300px' }} // Estilos del campo
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
          Comprar 🛒
        </button>
    </form>
  );
};

export default FormularioCompra;
