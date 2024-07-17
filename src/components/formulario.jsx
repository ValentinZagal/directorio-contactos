import React, { useState } from 'react';

const Formulario = ({ agregarContacto }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!/^[a-zA-Z\s]*$/.test(nombre)) {
      setError('El nombre solo puede contener letras y espacios.');
      return;
    }

    if (!nombre || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) || !/^\d{10}$/.test(telefono)) {
      setError('Por favor, ingrese datos válidos.');
      return;
    }
    agregarContacto({ id: Date.now(), nombre, email, telefono });
    setNombre('');
    setEmail('');
    setTelefono('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input 
          type="text" 
          className="form-control" 
          id="nombre" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Correo Electrónico</label>
        <input 
          type="email" 
          className="form-control" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="telefono" className="form-label">Número de Teléfono</label>
        <input 
          type="text" 
          className="form-control" 
          id="telefono" 
          value={telefono} 
          onChange={(e) => setTelefono(e.target.value)} 
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <button type="submit" className="btn btn-primary">Agregar Contacto</button>
    </form>
  );
};

export default Formulario;
