import React from 'react';
import './confirm.css';
import { Mail, Linkedin, Github } from 'lucide-react';

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
      <div className="footer">
     <p>Brigitte Blau</p>
  <div className="p">
 <a href="mailto:brigitteyaelblau@gmail.com" target="_blank" rel="noopener noreferrer">
        <Mail size={20} />
      </a>
      <a href="www.linkedin.com/in/brigitte-blau-17567835b" target="_blank" rel="noopener noreferrer">
        <Linkedin size={20} />
      </a>
      <a href="https://github.com/brigitteblau" target="_blank" rel="noopener noreferrer">
        <Github size={20} />
      </a>
</div>
      </div>
    

    </>
  );
};


