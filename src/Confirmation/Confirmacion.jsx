import React from 'react';
import './confirm.css';

export const Confirmacion = () => {
  return (
    <>
      <section className="confirmacion-section">
        <h2 className="confirmacion-titulo">CONFIRMACIÓN DE ASISTENCIA</h2>
        <p className="confirmacion-subtitulo">
          Esperamos que seas parte de esta gran celebración. ¡Confirmanos tu asistencia!
        </p>
        <a
          href="https://forms.gle/PFNpxXm1zQ2R2edVA"
          target="_blank"
          rel="noopener noreferrer"
          className="confirmacion-boton"
        >
          CONFIRMAR ASISTENCIA
        </a>
      </section>

      <div className="agradecimiento">
        ¡Gracias por acompañarnos en este momento tan importante!
      </div>
       <div className="agradecimiento">
        Brigitte Blau desarrolladora creativa 
      </div>
    </>
  );
};


