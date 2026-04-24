import React, { useState } from 'react';
import { Download, FileText } from 'lucide-react';
import DescargarModal from '../components/DescargarModal';
import descargas from '../data/descargas.json';
import './Descargas.css';

function Descargas() {
  const [descargaSeleccionada, setDescargaSeleccionada] = useState(null);

  const fases = ['Ignite', 'Burn', 'Flow', 'Peak'];
  const tiposDocumento = {
    alimentos: { icono: '🥗', label: 'Alimentos' },
    secretos: { icono: '✨', label: 'Secretos' },
    compras: { icono: '🛒', label: 'Compras' }
  };

  return (
    <div className="descargas-page">
      <div className="container">
        <div className="descargas-header">
          <h1>Centro de Descargas</h1>
          <p>Accede a toda la información del Método DKP en un solo lugar</p>
        </div>

        {fases.map((fase) => {
          const documentosFase = descargas.descargas.filter(d => d.fase === fase);
          if (documentosFase.length === 0) return null;

          return (
            <div key={fase} className="fase-section">
              <div className="fase-titulo">
                <h2>Fase: {fase}</h2>
              </div>

              <div className="documentos-grid">
                {documentosFase.map((doc) => (
                  <div
                    key={doc.id}
                    className="documento-card"
                    onClick={() => setDescargaSeleccionada(doc)}
                  >
                    <div className="documento-icon">
                      {tiposDocumento[doc.tipo].icono}
                    </div>
                    <div className="documento-info">
                      <h3>{doc.titulo}</h3>
                      <p>{doc.descripcion}</p>
                      <span className="tipo-badge">
                        {tiposDocumento[doc.tipo].label}
                      </span>
                    </div>
                    <div className="documento-cta">
                      <Download size={20} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {descargaSeleccionada && (
        <DescargarModal
          descarga={descargaSeleccionada}
          onClose={() => setDescargaSeleccionada(null)}
        />
      )}
    </div>
  );
}

export default Descargas;
