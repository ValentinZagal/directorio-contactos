import React, { useState, useEffect } from 'react';
import Formulario from './components/formulario';
import Lista from './components/lista';

const Key = 'contactos';

function App() {
  const [contactos, setContactos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [contactosFiltrados, setContactosFiltrados] = useState([]);

  useEffect(() => {
    const contactosGuardados = JSON.parse(localStorage.getItem(Key)) || [];
    if (contactosGuardados.length > 0) {
      setContactos(contactosGuardados);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(Key, JSON.stringify(contactos));
  }, [contactos]);

  useEffect(() => {
    setContactosFiltrados(
      contactos.filter(contacto =>
        contacto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        contacto.email.toLowerCase().includes(busqueda.toLowerCase()) ||
        contacto.telefono.includes(busqueda)
      )
    );
  }, [busqueda, contactos]);

  const agregarContacto = (nuevoContacto) => {
    setContactos([...contactos, nuevoContacto]);
  };

  const eliminarContacto = (id) => {
    const nuevosContactos = contactos.filter(contacto => contacto.id !== id);
    setContactos(nuevosContactos);
  };

  const editarContacto = (contactoActualizado) => {
    const contactosActualizados = contactos.map(contacto =>
      contacto.id === contactoActualizado.id ? contactoActualizado : contacto
    );
    setContactos(contactosActualizados);
  };

  return (
    <div className="container">
      <header>
        <h1 className="my-4">Directorio de Contactos</h1>
      </header>
      <input 
        type="text" 
        className="form-control mb-4" 
        placeholder="Buscar contacto..." 
        value={busqueda} 
        onChange={(e) => setBusqueda(e.target.value)} 
      />
      <Formulario agregarContacto={agregarContacto} />
      <Lista 
        contactos={contactosFiltrados} 
        eliminarContacto={eliminarContacto} 
        editarContacto={editarContacto} 
      />
    </div>
  );
}

export default App;
