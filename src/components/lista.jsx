import React from 'react';
import Contacto from './contacto';

const Lista = ({ contactos, eliminarContacto, editarContacto }) => {
  return (
    <div className="lista-contactos">
      {contactos.map(contacto => (
        <Contacto 
          key={contacto.id} 
          contacto={contacto} 
          eliminarContacto={eliminarContacto} 
          editarContacto={editarContacto} 
        />
      ))}
    </div>
  );
};

export default Lista;
