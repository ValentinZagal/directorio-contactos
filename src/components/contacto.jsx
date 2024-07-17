import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ContactoDetalle = ({ contacto, eliminarContacto }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [nombre, setNombre] = useState(contacto.nombre);
  const [email, setEmail] = useState(contacto.email);
  const [telefono, setTelefono] = useState(contacto.telefono);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNombre(contacto.nombre);
    setEmail(contacto.email);
    setTelefono(contacto.telefono);
  };

  return (
    <div className={`card mb-3 ${isEditing ? 'card-editing' : ''}`}>
      <div className="card-body">
        <div className="contacto-detalle">

          <div className="contacto-imagen">
            <img src="https://slm-assets.secondlife.com/assets/34142038/lightbox/ee12a906d097550141060360ccc54fd2.jpg?1697852098" alt="Imagen izquierda" />
          </div>
          

          <div className="contacto-info">
            {isEditing ? (
              <>
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
                <button className="btn btn-success me-2" onClick={handleSave}>Guardar</button>
                <button className="btn btn-secondary" onClick={handleCancel}>Cancelar</button>
              </>
            ) : (
              <>
                <h5 className="card-title">{contacto.nombre}</h5>
                <p className="card-text">{contacto.email}</p>
                <p className="card-text">{contacto.telefono}</p>
                <div className="card-buttons">
                  <button className="btn btn-primary me-2" onClick={handleEdit}><FaEdit /></button>
                  <button className="btn btn-danger" onClick={() => eliminarContacto(contacto.id)}><FaTrash /></button>
                </div>
              </>
            )}
          </div>
          <div className="contacto-imagen">
            <img src="https://i.pinimg.com/736x/51/82/8c/51828cf74488648bfe01f538e8e5f77a.jpg" alt="Imagen derecha" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoDetalle;