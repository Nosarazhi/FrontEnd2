// Formulario.jsx
import React, { useState } from 'react';
import { useEffect } from 'react';
import './formularioo.css';
import { getAllTasks } from '../api/formulario.api';



async function cargarTurnos(){
    const res = await getAllTasks();
	console.log(res);
}
cargarTurnos();

const Formulario = () => {
    const [formularioData, setFormularioData] = useState({
      nombre: '',
      apellido: '',
      fecha: '',
      hora: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormularioData({ ...formularioData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Datos del formulario:', formularioData);
    };
  
    return (
      <div className="turnos">
        <form onSubmit={handleSubmit} className="form-box">
          <div className="form-group">
            <label>
              Nombre:
              <input
                type="text"
                name="nombre"
                value={formularioData.nombre}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Apellido:
              <input
                type="text"
                name="apellido"
                value={formularioData.apellido}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Fecha:
              <input
                type="date"
                name="fecha"
                value={formularioData.fecha}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Hora:
              <input
                type="time"
                name="hora"
                value={formularioData.hora}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    );
  };
  
  export default Formulario;
  