import { useState } from 'react';
import './formularioo.css';

const Formulario = () => {
  const [formularioData, setFormularioData] = useState({
    especialidad: '',
    servicio: '',
    profesional: '',
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
    // Aquí puedes realizar acciones adicionales, como enviar los datos a la API.
  };

  return (
    <div className="turnos">
      <form onSubmit={handleSubmit} className="form-box">
        <div className="form-group">
          <label>
            Especialidad:
            <select
              name="especialidad"
              value={formularioData.especialidad}
              onChange={handleChange}
            >
              <option value="">Selecciona una especialidad</option>
              <option value="Barberia">Barberia</option>
              <option value="Teñido de pelo">Teñido de pelo</option>
              <option value="Masaje">Masaje</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            Servicio:
            <select
              name="servicio"
              value={formularioData.servicio}
              onChange={handleChange}
            >
              <option value="">Selecciona un servicio</option>
              {formularioData.especialidad === 'Barberia' && (
                <option value="Corte de pelo">Corte de pelo</option>
              )}
              {formularioData.especialidad === 'Teñido de pelo' && (
                <option value="Teñido de pelo">Teñido de pelo</option>
              )}
              {formularioData.especialidad === 'Masaje' && (
                <>
                  <option value="Masaje cuerpo completo">Masaje cuerpo completo</option>
                  <option value="Masaje Capilar">Masaje Capilar</option>
                </>
              )}
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            Profesional:
            <select
              name="profesional"
              value={formularioData.profesional}
              onChange={handleChange}
            >
              <option value="">Selecciona un profesional</option>
              <option value="Pepe">Pepe</option>
              <option value="Juan">Juan</option>
              <option value="Alberto">Alberto</option>
            </select>
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
