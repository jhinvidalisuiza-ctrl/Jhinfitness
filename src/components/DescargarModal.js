import React, { useState } from 'react';
import { X, Download } from 'lucide-react';
import './DescargarModal.css';

function DescargarModal({ descarga, onClose }) {
  const [contenido, setContenido] = useState('');
  const [cargando, setCargando] = useState(true);

  React.useEffect(() => {
    const cargarContenido = async () => {
      try {
        const response = await fetch(`/pdfs/${descarga.archivo}`);
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const contenidoHTML = doc.body.innerHTML;
        setContenido(contenidoHTML);
      } catch (err) {
        console.error('Error cargando archivo:', err);
        setContenido('<p>Error al cargar el archivo</p>');
      } finally {
        setCargando(false);
      }
    };
    cargarContenido();
  }, [descarga]);

  const handleDescargar = () => {
    const link = document.createElement('a');
    link.href = `/pdfs/${descarga.archivo}`;
    link.download = descarga.titulo.replace(/\s+/g, '-').toLowerCase() + '.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{descarga.titulo}</h2>
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="modal-body">
          {cargando ? (
            <div className="loading">Cargando información...</div>
          ) : (
            <div className="contenido-pdf" dangerouslySetInnerHTML={{ __html: contenido }} />
          )}
        </div>

        <div className="modal-footer">
          <button className="btn-descargar" onClick={handleDescargar}>
            <Download size={18} />
            Descargar Documento
          </button>
        </div>
      </div>
    </div>
  );
}

export default DescargarModal;
